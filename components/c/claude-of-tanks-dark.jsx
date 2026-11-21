import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3sii4bxj.css';
import '../../css/e/e2qjp_beg.css';

const viewBox = {"width":9956,"height":700,"left":55,"top":142};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3sii4bxj"/><path class="e2qjp_beg"/>`,
		"fallback": "thesvg-color:claude-of-tanks-dark",
	});
}

export default Component;
