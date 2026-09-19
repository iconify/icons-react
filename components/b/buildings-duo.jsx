import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cypp3g9oc.css';
import '../../css/m/mlztb_4gl.css';
import '../../css/q/q9bs_0ber.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cypp3g9oc"/><path class="mlztb_4gl"/><path class="q9bs_0ber"/></g>`,
		"fallback": "glyphs:buildings-duo",
	});
}

export default Component;
