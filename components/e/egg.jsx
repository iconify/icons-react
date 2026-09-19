import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5_6z224g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f5_6z224g"/>`,
		"fallback": "griddy-icons:egg",
	});
}

export default Component;
