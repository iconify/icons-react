import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hutgu3b3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hutgu3b3i"/>`,
		"fallback": "griddy-icons:code-pull-request-filled",
	});
}

export default Component;
