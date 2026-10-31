import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m2wrs7o9j.css';
import '../../css/h/hv_nr8etw.css';
import '../../css/m/md8p81qbk.css';
import '../../css/u/usjyk3bwq.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m2wrs7o9j"/><path class="hv_nr8etw"/><path class="md8p81qbk"/><path class="usjyk3bwq"/></g>`,
		"fallback": "cif:dj",
	});
}

export default Component;
