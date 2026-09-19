import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dw5hulxel.css';
import '../../css/u/uyep4_z_f.css';
import '../../css/o/ohnoc3s5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dw5hulxel"/><path class="uyep4_z_f"/><path class="ohnoc3s5p"/></g>`,
		"fallback": "hugeicons:briefcase-06",
	});
}

export default Component;
