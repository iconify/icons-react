import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thas5ub-d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="thas5ub-d"/>`,
		"fallback": "streamline-flex:erlenmeyer-flask-remix",
	});
}

export default Component;
