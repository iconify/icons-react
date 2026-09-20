import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir9vx3bvg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ir9vx3bvg"/>`,
		"fallback": "streamline-color:erlenmeyer-flask-flat",
	});
}

export default Component;
