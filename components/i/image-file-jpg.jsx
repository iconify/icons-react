import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ahssyn5ra.css';
import '../../css/g/gd42n2r-e.css';
import '../../css/q/qsxp9sa8e.css';
import '../../css/n/n7nnqq0ig.css';
import '../../css/i/ibsgw-b1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ahssyn5ra"/><path class="gd42n2r-e"/><path class="qsxp9sa8e"/><path class="n7nnqq0ig"/><path class="ibsgw-b1y"/></g>`,
		"fallback": "streamline-ultimate-color:image-file-jpg",
	});
}

export default Component;
