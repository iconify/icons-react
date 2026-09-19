import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-2tvnb7t.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n-2tvnb7t"/>`,
		"fallback": "devicon:adonisjs",
	});
}

export default Component;
