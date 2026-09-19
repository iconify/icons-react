import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w9m3pkq5w.css';
import '../../css/p/pc8a5xtuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w9m3pkq5w"/><path class="pc8a5xtuo"/></g>`,
		"fallback": "hugeicons:activity-05",
	});
}

export default Component;
