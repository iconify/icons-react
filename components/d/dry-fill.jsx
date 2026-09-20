import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4_xldbbg.css';
import '../../css/z/zlbz5jbgm.css';
import '../../css/z/zhg6ptbsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b4_xldbbg"/><path clip-rule="evenodd" class="zlbz5jbgm"/><path clip-rule="evenodd" class="zhg6ptbsa"/>`,
		"fallback": "mingcute:dry-fill",
	});
}

export default Component;
