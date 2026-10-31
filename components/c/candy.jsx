import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hqs70tf8f.css';
import '../../css/h/hk9ycdccx.css';
import '../../css/f/fias-s_rc.css';
import '../../css/t/t09pcfr5l.css';
import '../../css/x/xf_vo7put.css';
import '../../css/p/pzd0r140e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="hqs70tf8f wm-shadow"/><path class="hk9ycdccx wm-shadow"/><path class="fias-s_rc"/><path class="t09pcfr5l"/><path class="xf_vo7put"/><path class="pzd0r140e"/></g>`,
		"fallback": "withicons-brutal:candy",
	});
}

export default Component;
