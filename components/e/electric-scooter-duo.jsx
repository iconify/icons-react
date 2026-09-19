import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uo900g4hq.css';
import '../../css/q/qm40mrfsp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uo900g4hq"/><path class="qm40mrfsp"/></g>`,
		"fallback": "glyphs:electric-scooter-duo",
	});
}

export default Component;
