import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/h8h0kebzw.css';
import '../../css/t/t0_qigmae.css';
import '../../css/g/go71ikbrb.css';
import '../../css/e/egw__1kxp.css';
import '../../css/o/owxju6b8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="h8h0kebzw wm-shadow"/><path class="t0_qigmae wm-shadow"/><path class="go71ikbrb"/><path class="egw__1kxp"/><path class="owxju6b8f"/></g>`,
		"fallback": "withicons-brutal:cherry",
	});
}

export default Component;
