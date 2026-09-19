import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d34t52bcx.css';
import '../../css/o/obsscdhly.css';
import '../../css/w/wlpsfnrem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d34t52bcx"/><circle class="obsscdhly"/><path class="wlpsfnrem"/></g>`,
		"fallback": "hugeicons:folder-git",
	});
}

export default Component;
