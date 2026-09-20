import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a98x90tin.css';
import '../../css/n/nk852ib5d.css';
import '../../css/f/fmri9pa_o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a98x90tin"/><path class="nk852ib5d"/><path class="fmri9pa_o"/></g>`,
		"fallback": "streamline-color:ethereum",
	});
}

export default Component;
