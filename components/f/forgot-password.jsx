import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cno_kybgn.css';
import '../../css/a/aqdmquwpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cno_kybgn"/><path class="aqdmquwpe"/></g>`,
		"fallback": "hugeicons:forgot-password",
	});
}

export default Component;
