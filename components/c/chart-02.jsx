import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/it-o3tbsu.css';
import '../../css/u/uk6yj9byn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="it-o3tbsu"/><path class="uk6yj9byn"/></g>`,
		"fallback": "hugeicons:chart-02",
	});
}

export default Component;
