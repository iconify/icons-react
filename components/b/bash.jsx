import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j4n2e9b5s.css';
import '../../css/b/b77aab4sk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j4n2e9b5s"/><path class="b77aab4sk"/></g>`,
		"fallback": "hugeicons:bash",
	});
}

export default Component;
