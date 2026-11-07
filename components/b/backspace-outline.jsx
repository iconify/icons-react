import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb-qqv6dc.css';
import '../../css/j/j_2v-fbwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb-qqv6dc"/><path clip-rule="evenodd" class="j_2v-fbwa"/>`,
		"fallback": "solar:backspace-outline",
	});
}

export default Component;
