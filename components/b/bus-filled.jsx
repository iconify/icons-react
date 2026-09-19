import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md6o_9v8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="md6o_9v8c"/>`,
		"fallback": "griddy-icons:bus-filled",
	});
}

export default Component;
