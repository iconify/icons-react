import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/foum4ackb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="foum4ackb"/>`,
		"fallback": "noviair:home",
	});
}

export default Component;
