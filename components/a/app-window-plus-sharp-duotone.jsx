import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/ygul10psw.css';
import '../../css/k/kj2waq_ni.css';
import '../../css/u/unky6y77u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ygul10psw"/><path class="kj2waq_ni"/><path class="unky6y77u"/></g>`,
		"fallback": "keyline-icons:app-window-plus-sharp-duotone",
	});
}

export default Component;
