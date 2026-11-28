import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr9736bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr9736bcp"/>`,
		"fallback": "noviair-light:file-plus",
	});
}

export default Component;
