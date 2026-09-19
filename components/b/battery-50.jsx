import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0y0vmcag.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0y0vmcag"/>`,
		"fallback": "glyphs:battery-50",
	});
}

export default Component;
