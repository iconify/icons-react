import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhvdx6bgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhvdx6bgd"/>`,
		"fallback": "noviair-light:cast-x",
	});
}

export default Component;
