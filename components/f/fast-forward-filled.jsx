import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzv41yu8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jzv41yu8y"/>`,
		"fallback": "griddy-icons:fast-forward-filled",
	});
}

export default Component;
