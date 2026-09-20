import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-7kbeaet.css';
import '../../css/n/nz2h3ubvb.css';
import '../../css/w/wp3w3i6vo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a-7kbeaet"/><path class="nz2h3ubvb"/><path class="wp3w3i6vo"/></g>`,
		"fallback": "streamline-color:fragile",
	});
}

export default Component;
