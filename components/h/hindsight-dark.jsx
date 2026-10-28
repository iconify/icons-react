import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sovtbebal.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sovtbebal"/>`,
		"fallback": "selfhst:hindsight-dark",
	});
}

export default Component;
