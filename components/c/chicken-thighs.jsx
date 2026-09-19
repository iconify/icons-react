import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/i/i1z012scw.css';
import '../../css/m/m-y-4ohbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="i1z012scw"/><path class="m-y-4ohbo"/></g>`,
		"fallback": "hugeicons:chicken-thighs",
	});
}

export default Component;
