import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tga4nsf7j.css';
import '../../css/u/u_yk9hb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tga4nsf7j"/><path class="u_yk9hb_v"/></g>`,
		"fallback": "feather:corner-up-left",
	});
}

export default Component;
