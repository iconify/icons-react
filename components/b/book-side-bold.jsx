import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gddvqqbzi.css';
import '../../css/u/u-e9y2bca.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gddvqqbzi"/><path class="u-e9y2bca"/></g>`,
		"fallback": "glyphs:book-side-bold",
	});
}

export default Component;
