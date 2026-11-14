import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o3p6lvrrw.css';
import '../../css/k/korwpy5cr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o3p6lvrrw"/><path class="korwpy5cr"/></g>`,
		"fallback": "hugeicons:folder-locked",
	});
}

export default Component;
