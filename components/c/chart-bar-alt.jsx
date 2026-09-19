import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvr075our.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kvr075our"/>`,
		"fallback": "griddy-icons:chart-bar-alt",
	});
}

export default Component;
