import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/r9sfxmbqh.css';
import '../../css/u/unky6y77u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="r9sfxmbqh"/><path class="unky6y77u"/></g>`,
		"fallback": "keyline-icons:app-window-plus-sharp",
	});
}

export default Component;
