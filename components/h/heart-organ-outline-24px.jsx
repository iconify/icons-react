import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fdf4zcbdo.css';
import '../../css/o/o_6qsnbbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fdf4zcbdo"/><path class="o_6qsnbbr"/></g>`,
		"fallback": "healthicons:heart-organ-outline-24px",
	});
}

export default Component;
