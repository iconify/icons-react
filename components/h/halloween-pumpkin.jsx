import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsvm4h_mg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jsvm4h_mg"/>`,
		"fallback": "griddy-icons:halloween-pumpkin",
	});
}

export default Component;
