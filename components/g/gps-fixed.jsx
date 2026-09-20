import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/f/f_362pbxn.css';
import '../../css/n/n1xy6nh9u.css';
import '../../css/f/f8_k5bc_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="f_362pbxn"/><circle class="n1xy6nh9u"/><path class="f8_k5bc_f"/></g>`,
		"fallback": "lets-icons:gps-fixed",
	});
}

export default Component;
