import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrr0wcb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrr0wcb7f"/>`,
		"fallback": "griddy-icons:blood-drop-minus-filled",
	});
}

export default Component;
