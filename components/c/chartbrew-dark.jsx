import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfw2zcccl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfw2zcccl"/>`,
		"fallback": "selfhst:chartbrew-dark",
	});
}

export default Component;
