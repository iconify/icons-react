import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t732w_hqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t732w_hqb"/>`,
		"fallback": "simple-icons:bevy",
	});
}

export default Component;
