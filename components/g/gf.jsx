import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hcoc46qez.css';
import '../../css/i/ijcdvubgt.css';
import '../../css/x/x9okyob9o.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="hcoc46qez"/><path clip-rule="evenodd" class="ijcdvubgt"/><path clip-rule="evenodd" class="x9okyob9o"/></g>`,
		"fallback": "flagpack:gf",
	});
}

export default Component;
