import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x421mjp6p.css';
import '../../css/v/vtk9v9qiv.css';
import '../../css/i/iy-t96bdf.css';
import '../../css/f/fhryxrb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x421mjp6p"/><path clip-rule="evenodd" class="vtk9v9qiv"/><path clip-rule="evenodd" class="iy-t96bdf"/><path clip-rule="evenodd" class="fhryxrb5j"/></g>`,
		"fallback": "solar:git-pull-request-bold-duotone",
	});
}

export default Component;
