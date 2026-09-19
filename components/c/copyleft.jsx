import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qznxftb5v.css';
import '../../css/w/wqj3cpbjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qznxftb5v"/><path class="wqj3cpbjx"/></g>`,
		"fallback": "hugeicons:copyleft",
	});
}

export default Component;
