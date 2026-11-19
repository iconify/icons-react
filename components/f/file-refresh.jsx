import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y87jl14sb.css';
import '../../css/y/y3-7-2bpu.css';
import '../../css/u/unfd0jl3f.css';
import '../../css/f/f9qgg66gu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y87jl14sb"/><path class="y3-7-2bpu"/><path class="unfd0jl3f"/><path class="f9qgg66gu"/></g>`,
		"fallback": "andrsrxn:file-refresh",
	});
}

export default Component;
