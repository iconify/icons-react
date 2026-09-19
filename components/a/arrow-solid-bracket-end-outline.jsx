import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kg9w4qsen.css';
import '../../css/l/liep7esaq.css';
import '../../css/y/y2gkpb-0d.css';
import '../../css/c/c2u9nib0b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kg9w4qsen"/><path clip-rule="evenodd" class="liep7esaq"/><path class="y2gkpb-0d"/><path clip-rule="evenodd" class="c2u9nib0b"/></g>`,
		"fallback": "glyphs:arrow-solid-bracket-end-outline",
	});
}

export default Component;
