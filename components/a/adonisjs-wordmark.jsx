import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0efq_bzi.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m0efq_bzi"/>`,
		"fallback": "devicon:adonisjs-wordmark",
	});
}

export default Component;
