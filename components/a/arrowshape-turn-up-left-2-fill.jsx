import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk-o0h0gr.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk-o0h0gr"/>`,
		"fallback": "f7:arrowshape-turn-up-left-2-fill",
	});
}

export default Component;
