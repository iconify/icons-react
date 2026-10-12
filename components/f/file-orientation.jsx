import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z979mogjo.css';
import '../../css/f/fs2f81bzt.css';
import '../../css/n/ngbribb0z.css';
import '../../css/r/rvgip8e_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z979mogjo"/><path class="fs2f81bzt"/><path class="ngbribb0z"/><path class="rvgip8e_d"/></g>`,
		"fallback": "andrsrxn:file-orientation",
	});
}

export default Component;
