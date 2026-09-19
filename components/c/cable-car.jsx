import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcibvrb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dcibvrb9k"/>`,
		"fallback": "griddy-icons:cable-car",
	});
}

export default Component;
