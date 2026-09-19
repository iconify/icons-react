import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw9reep1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw9reep1s"/>`,
		"fallback": "griddy-icons:clipboard-data-filled",
	});
}

export default Component;
