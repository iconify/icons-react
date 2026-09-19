import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/h/hx90hqbdy.css';
import '../../css/j/jfqpbbc1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="hx90hqbdy"/><path class="jfqpbbc1g"/></g>`,
		"fallback": "akar-icons:backspace",
	});
}

export default Component;
