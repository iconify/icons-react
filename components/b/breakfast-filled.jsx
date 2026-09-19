import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqoqndb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uqoqndb5g"/>`,
		"fallback": "griddy-icons:breakfast-filled",
	});
}

export default Component;
