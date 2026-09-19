import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1ol9kbem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x1ol9kbem"/>`,
		"fallback": "griddy-icons:devices",
	});
}

export default Component;
