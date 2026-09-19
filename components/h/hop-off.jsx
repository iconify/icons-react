import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v6q_qjexq.css';
import '../../css/h/hoi-qpbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v6q_qjexq"/><path class="hoi-qpbgk"/></g>`,
		"fallback": "hugeicons:hop-off",
	});
}

export default Component;
