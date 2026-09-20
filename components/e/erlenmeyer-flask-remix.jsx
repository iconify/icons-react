import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngm47laox.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ngm47laox"/>`,
		"fallback": "streamline:erlenmeyer-flask-remix",
	});
}

export default Component;
