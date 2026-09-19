import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he1qhvp3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="he1qhvp3m"/>`,
		"fallback": "griddy-icons:clipboard-plus",
	});
}

export default Component;
