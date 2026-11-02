import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf2qkybtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf2qkybtb"/>`,
		"fallback": "mingcute:door-closed-locked-fill",
	});
}

export default Component;
