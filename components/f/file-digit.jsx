import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dw0h5lscg.css';
import '../../css/a/acmla6bez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dw0h5lscg"/><path class="acmla6bez"/></g>`,
		"fallback": "hugeicons:file-digit",
	});
}

export default Component;
