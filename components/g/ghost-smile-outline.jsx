import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgtu0ushs.css';
import '../../css/f/fxx3vj85s.css';
import '../../css/f/f0jrc02ha.css';
import '../../css/q/q_81dnb5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgtu0ushs"/><path class="fxx3vj85s"/><path class="f0jrc02ha"/><path clip-rule="evenodd" class="q_81dnb5u"/>`,
		"fallback": "solar:ghost-smile-outline",
	});
}

export default Component;
