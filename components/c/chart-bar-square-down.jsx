import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzihuc18u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wzihuc18u"/>`,
		"fallback": "griddy-icons:chart-bar-square-down",
	});
}

export default Component;
