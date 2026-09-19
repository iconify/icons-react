import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i9dlazb0p.css';
import '../../css/w/wqod1hc8j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i9dlazb0p"/><path class="wqod1hc8j"/></g>`,
		"fallback": "glyphs:briefcase-1-duo",
	});
}

export default Component;
