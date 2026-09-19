import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/z/z3g7fgktw.css';
import '../../css/b/bhoybwbpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="z3g7fgktw"/><path class="bhoybwbpv"/></g>`,
		"fallback": "hugeicons:ai-file",
	});
}

export default Component;
