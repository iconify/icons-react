import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6g5b-1bf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6g5b-1bf"/>`,
		"fallback": "griddy-icons:hexagon",
	});
}

export default Component;
