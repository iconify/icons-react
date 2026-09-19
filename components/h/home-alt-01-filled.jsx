import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx20v6byn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx20v6byn"/>`,
		"fallback": "griddy-icons:home-alt-01-filled",
	});
}

export default Component;
