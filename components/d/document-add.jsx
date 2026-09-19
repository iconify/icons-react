import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyxl8dbgf.css';
import '../../css/b/buduld4sj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyxl8dbgf"/><path class="buduld4sj"/>`,
		"fallback": "carbon:document-add",
	});
}

export default Component;
