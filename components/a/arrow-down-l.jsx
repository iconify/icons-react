import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q386gwb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q386gwb_b"/>`,
		"fallback": "fontisto:arrow-down-l",
	});
}

export default Component;
