import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk7j9cb8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rk7j9cb8g"/>`,
		"fallback": "griddy-icons:console-filled",
	});
}

export default Component;
