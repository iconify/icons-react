import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfv202b0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfv202b0b"/>`,
		"fallback": "noviair:hammer-check",
	});
}

export default Component;
