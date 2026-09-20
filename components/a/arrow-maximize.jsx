import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdfm9_06w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdfm9_06w"/>`,
		"fallback": "proicons:arrow-maximize",
	});
}

export default Component;
