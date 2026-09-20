import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mejt4lx3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mejt4lx3i"/>`,
		"fallback": "reicon:circle-graph-filled",
	});
}

export default Component;
