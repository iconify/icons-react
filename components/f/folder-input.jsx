import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sa38l7r8l.css';
import '../../css/h/hgrz1ubmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sa38l7r8l"/><path class="hgrz1ubmc"/></g>`,
		"fallback": "hugeicons:folder-input",
	});
}

export default Component;
