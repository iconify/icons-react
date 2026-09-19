import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-4t613wq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h-4t613wq"/>`,
		"fallback": "griddy-icons:chart-pie-alt-01-filled",
	});
}

export default Component;
