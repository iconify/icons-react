import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_a6-pb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_a6-pb4w"/>`,
		"fallback": "ri:aspect-ratio-line",
	});
}

export default Component;
