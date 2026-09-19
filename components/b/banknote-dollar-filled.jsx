import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h34m3h0js.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h34m3h0js"/>`,
		"fallback": "griddy-icons:banknote-dollar-filled",
	});
}

export default Component;
