import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h87anf81m.css';
import '../../css/q/qj5o-8b_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h87anf81m"/><path class="qj5o-8b_t"/>`,
		"fallback": "streamline-ultimate:instrument-tambourine-bold",
	});
}

export default Component;
