import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b83te_ldv.css';
import '../../css/e/e_7i3cbkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b83te_ldv"/><path class="e_7i3cbkz"/></g>`,
		"fallback": "solar:cursor-line-duotone",
	});
}

export default Component;
