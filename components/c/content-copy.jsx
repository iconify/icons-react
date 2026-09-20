import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izc259z0t.css';
import '../../css/u/u29y0z2tk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izc259z0t"/><path class="u29y0z2tk"/>`,
		"fallback": "streamline-block:content-copy",
	});
}

export default Component;
