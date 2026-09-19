import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v27imyb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v27imyb9k"/>`,
		"fallback": "griddy-icons:diamond-gem-filled",
	});
}

export default Component;
