import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vh5znhotu.css';
import '../../css/t/tj4vulnki.css';
import '../../css/t/tkfrl-bwu.css';
import '../../css/q/qff5zwbcp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vh5znhotu"/><path clip-rule="evenodd" class="tj4vulnki"/><path class="tkfrl-bwu"/><path clip-rule="evenodd" class="qff5zwbcp"/></g>`,
		"fallback": "glyphs:check-square-outline",
	});
}

export default Component;
