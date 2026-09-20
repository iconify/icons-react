import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u_yk9hb_v.css';
import '../../css/t/tga4nsf7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u_yk9hb_v"/><path class="tga4nsf7j"/></g>`,
		"fallback": "lucide:corner-up-left",
	});
}

export default Component;
