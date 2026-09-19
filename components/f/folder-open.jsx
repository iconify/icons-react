import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/isrh1wb3s.css';
import '../../css/u/u6a4ilbwx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="isrh1wb3s"/><path clip-rule="evenodd" class="u6a4ilbwx"/></g>`,
		"fallback": "glyphs-poly:folder-open",
	});
}

export default Component;
