import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk0s4mbbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qk0s4mbbv"/>`,
		"fallback": "solar:folder-path-connect-bold",
	});
}

export default Component;
