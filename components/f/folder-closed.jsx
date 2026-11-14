import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/r/rp-j3wbxw.css';
import '../../css/l/lqegcd5uy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="rp-j3wbxw"/><path class="lqegcd5uy"/></g>`,
		"fallback": "hugeicons:folder-closed",
	});
}

export default Component;
