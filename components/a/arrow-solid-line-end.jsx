import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/myb-o0u2k.css';
import '../../css/v/vibnyzb4c.css';
import '../../css/a/a9azocbll.css';
import '../../css/k/k-ui4ib0p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="myb-o0u2k"/><path class="vibnyzb4c"/><path class="a9azocbll"/><path class="k-ui4ib0p"/></g>`,
		"fallback": "glyphs-poly:arrow-solid-line-end",
	});
}

export default Component;
