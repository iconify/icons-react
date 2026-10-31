import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vo6h90b_z.css';
import '../../css/q/qfnc18b1r.css';
import '../../css/p/pt6my3r3u.css';

const viewBox = {"width":301,"height":181};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vo6h90b_z"/><path class="qfnc18b1r"/><path class="pt6my3r3u"/></g>`,
		"fallback": "cif:cr",
	});
}

export default Component;
