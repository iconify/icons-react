import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lquxq_0-b.css';
import '../../css/e/eh_m-vi9v.css';
import '../../css/c/comdxum3w.css';
import '../../css/k/kye1psbcx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lquxq_0-b"/><path class="eh_m-vi9v"/><path class="comdxum3w"/><path class="kye1psbcx"/></g>`,
		"fallback": "glyphs:bell-ring-duo",
	});
}

export default Component;
