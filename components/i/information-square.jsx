import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wte385g2u.css';
import '../../css/j/jjvk5vb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wte385g2u"/><path class="jjvk5vb6i"/></g>`,
		"fallback": "hugeicons:information-square",
	});
}

export default Component;
