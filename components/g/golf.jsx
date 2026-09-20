import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9u8tbcym.css';
import '../../css/o/o_4vtebcc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9u8tbcym"/><path class="o_4vtebcc"/>`,
		"fallback": "vaadin:golf",
	});
}

export default Component;
