import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dft2f2b5v.css';
import '../../css/v/vvnv8gbas.css';
import '../../css/a/a8-blkb-j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dft2f2b5v"/><path class="vvnv8gbas"/><path class="a8-blkb-j"/></g>`,
		"fallback": "streamline-flex-color:application-add",
	});
}

export default Component;
