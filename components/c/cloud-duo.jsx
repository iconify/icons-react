import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzgwfsg3w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzgwfsg3w"/>`,
		"fallback": "glyphs:cloud-duo",
	});
}

export default Component;
