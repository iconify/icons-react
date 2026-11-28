import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hav6w5euk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hav6w5euk"/>`,
		"fallback": "noviair-light:arrow-down",
	});
}

export default Component;
