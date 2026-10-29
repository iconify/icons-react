import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pdfeonb1r.css';
import '../../css/a/a03ggtq6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pdfeonb1r"/><path class="a03ggtq6j"/></g>`,
		"fallback": "withicons:folder-sketch",
	});
}

export default Component;
