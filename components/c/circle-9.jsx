import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ars639bea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ars639bea"/>`,
		"fallback": "noviair-light:circle-9",
	});
}

export default Component;
