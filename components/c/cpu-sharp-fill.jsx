import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hgrtmcj5y.css';
import '../../css/c/cqb5fwwed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hgrtmcj5y"/><path class="cqb5fwwed"/></g>`,
		"fallback": "keyline-icons:cpu-sharp-fill",
	});
}

export default Component;
