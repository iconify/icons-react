import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j057kdpbu.css';
import '../../css/h/h8uawnbzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j057kdpbu"/><path class="h8uawnbzx"/></g>`,
		"fallback": "hugeicons:folder-security",
	});
}

export default Component;
