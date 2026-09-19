import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gqr9l0ynb.css';
import '../../css/f/ffm2957gr.css';
import '../../css/t/todwt_aam.css';
import '../../css/u/u_9hx-b8i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gqr9l0ynb"/><path class="ffm2957gr"/><path clip-rule="evenodd" class="todwt_aam"/><path class="u_9hx-b8i"/></g>`,
		"fallback": "glyphs-poly:certificate",
	});
}

export default Component;
