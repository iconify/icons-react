import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zt1kts5cj.css';
import '../../css/x/x07gi_bsw.css';
import '../../css/o/osr3gdbap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zt1kts5cj"/><path class="x07gi_bsw"/><path class="osr3gdbap"/></g>`,
		"fallback": "hugeicons:analytics-down",
	});
}

export default Component;
