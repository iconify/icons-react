import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0pyhdc2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f0pyhdc2n"/>`,
		"fallback": "keyline-icons:circle-caret-up-fill",
	});
}

export default Component;
