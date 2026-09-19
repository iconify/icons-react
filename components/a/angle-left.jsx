import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb7asb_cr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb7asb_cr"/>`,
		"fallback": "icons8:angle-left",
	});
}

export default Component;
