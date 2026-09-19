import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whm-hphna.css';
import '../../css/e/eb1nrrorr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="whm-hphna"/><path class="eb1nrrorr"/></g>`,
		"fallback": "glyphs:hand-holding-seedling-duo",
	});
}

export default Component;
