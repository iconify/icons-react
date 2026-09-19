import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/d18z1mbpu.css';
import '../../css/j/j_od74bsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="d18z1mbpu"/><path class="j_od74bsa"/></g>`,
		"fallback": "hugeicons:blockchain-01",
	});
}

export default Component;
