import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn7nyeb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn7nyeb6r"/>`,
		"fallback": "thesvg:cobalt",
	});
}

export default Component;
