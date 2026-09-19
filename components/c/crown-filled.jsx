import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/daw-8pbwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="daw-8pbwf"/>`,
		"fallback": "griddy-icons:crown-filled",
	});
}

export default Component;
