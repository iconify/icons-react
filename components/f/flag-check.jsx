import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwsp2sbir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwsp2sbir"/>`,
		"fallback": "noviair:flag-check",
	});
}

export default Component;
