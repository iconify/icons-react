import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thk8cdcdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thk8cdcdd"/>`,
		"fallback": "noviair-light:home-info",
	});
}

export default Component;
