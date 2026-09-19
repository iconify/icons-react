import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-7mvzbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q-7mvzbzv"/>`,
		"fallback": "griddy-icons:chart-bar-square",
	});
}

export default Component;
