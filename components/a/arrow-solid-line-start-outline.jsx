import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rftmwyb_p.css';
import '../../css/b/bwcarn5wh.css';
import '../../css/m/mz5y2hvkq.css';
import '../../css/t/t8ue8_09r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rftmwyb_p"/><path class="bwcarn5wh"/><path clip-rule="evenodd" class="mz5y2hvkq"/><path class="t8ue8_09r"/></g>`,
		"fallback": "glyphs:arrow-solid-line-start-outline",
	});
}

export default Component;
