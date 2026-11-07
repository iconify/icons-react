import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wojb86weh.css';
import '../../css/z/zff8-s_yj.css';
import '../../css/o/o0rbffbmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wojb86weh"/><path class="zff8-s_yj"/><path class="o0rbffbmi"/></g>`,
		"fallback": "solar:folder-lock-linear",
	});
}

export default Component;
