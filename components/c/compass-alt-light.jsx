import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/p058992qq.css';
import '../../css/w/w53vdub7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="p058992qq"/><path class="w53vdub7q"/></g>`,
		"fallback": "lets-icons:compass-alt-light",
	});
}

export default Component;
