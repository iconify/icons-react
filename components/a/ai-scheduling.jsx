import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ig7s_5_sl.css';
import '../../css/z/zciqlmbzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ig7s_5_sl"/><path class="zciqlmbzf"/></g>`,
		"fallback": "hugeicons:ai-scheduling",
	});
}

export default Component;
