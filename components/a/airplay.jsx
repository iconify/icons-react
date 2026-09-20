import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyynzkb6k.css';
import '../../css/c/c7maq1bjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="pyynzkb6k"/><path class="c7maq1bjj"/>`,
		"fallback": "uim:airplay",
	});
}

export default Component;
