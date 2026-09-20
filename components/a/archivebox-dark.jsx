import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5ob8_bjv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5ob8_bjv"/>`,
		"fallback": "selfhst:archivebox-dark",
	});
}

export default Component;
