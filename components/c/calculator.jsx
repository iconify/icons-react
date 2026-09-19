import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0dd72brq.css';
import '../../css/v/v1z4zvbtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0dd72brq"/><path class="v1z4zvbtf"/>`,
		"fallback": "boxicons:calculator",
	});
}

export default Component;
