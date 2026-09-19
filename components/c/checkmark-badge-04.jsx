import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/itl6pib4d.css';
import '../../css/p/p9gdtybnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="itl6pib4d"/><path class="p9gdtybnk"/></g>`,
		"fallback": "hugeicons:checkmark-badge-04",
	});
}

export default Component;
