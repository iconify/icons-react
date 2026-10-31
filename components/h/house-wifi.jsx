import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/h22q30bqx.css';
import '../../css/s/s6tfabbgr.css';
import '../../css/u/u9l6lfbri.css';
import '../../css/h/hjmtsxb_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="h22q30bqx wm-shadow"/><path class="s6tfabbgr wm-shadow"/><path class="u9l6lfbri"/><path class="hjmtsxb_c"/></g>`,
		"fallback": "withicons-brutal:house-wifi",
	});
}

export default Component;
