import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7wtl-18m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v7wtl-18m"/>`,
		"fallback": "keyline-icons:building-fill",
	});
}

export default Component;
