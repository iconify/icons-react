import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ejl_huvrw.css';
import '../../css/v/v5m4o4ojx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ejl_huvrw"/><path class="v5m4o4ojx"/></g>`,
		"fallback": "hugeicons:chatting-01",
	});
}

export default Component;
