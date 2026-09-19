import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg5xmcbpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rg5xmcbpc"/>`,
		"fallback": "griddy-icons:chart-bar-up-alt",
	});
}

export default Component;
