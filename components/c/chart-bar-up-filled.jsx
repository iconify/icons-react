import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnt2b8bbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rnt2b8bbu"/>`,
		"fallback": "griddy-icons:chart-bar-up-filled",
	});
}

export default Component;
