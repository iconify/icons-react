import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yuh2hpbud.css';
import '../../css/b/buuf9vhap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yuh2hpbud"/><path class="buuf9vhap"/></g>`,
		"fallback": "hugeicons:building2",
	});
}

export default Component;
