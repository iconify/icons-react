import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz2mxftjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz2mxftjw"/>`,
		"fallback": "griddy-icons:dental-forceps-filled",
	});
}

export default Component;
