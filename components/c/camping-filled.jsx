import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbjb7acud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbjb7acud"/>`,
		"fallback": "griddy-icons:camping-filled",
	});
}

export default Component;
