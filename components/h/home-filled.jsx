import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pypnfvion.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pypnfvion"/>`,
		"fallback": "griddy-icons:home-filled",
	});
}

export default Component;
