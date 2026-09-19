import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mu2a2galn.css';
import '../../css/n/n_o6seuop.css';
import '../../css/v/v35nnjbuw.css';
import '../../css/a/anjlg6eec.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mu2a2galn"/><path class="n_o6seuop"/><path class="v35nnjbuw"/><path class="anjlg6eec"/></g>`,
		"fallback": "glyphs-poly:box-1",
	});
}

export default Component;
