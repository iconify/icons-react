import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7ej__5_w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j7ej__5_w"/>`,
		"fallback": "streamline:erlenmeyer-flask-solid",
	});
}

export default Component;
