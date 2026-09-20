import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rafsg0atz.css';
import '../../css/w/wn36-3bgk.css';
import '../../css/k/k7_ztobeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rafsg0atz"/><path class="wn36-3bgk"/><path class="k7_ztobeu"/>`,
		"fallback": "lineicons:bmw",
	});
}

export default Component;
