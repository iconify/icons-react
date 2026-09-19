import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ufokr2bdi.css';
import '../../css/z/zmbk5lg7t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ufokr2bdi"/><path class="zmbk5lg7t"/></g>`,
		"fallback": "glyphs:align-items-center-duo",
	});
}

export default Component;
