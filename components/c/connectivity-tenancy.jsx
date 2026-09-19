import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggywzw3ne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggywzw3ne"/>`,
		"fallback": "griddy-icons:connectivity-tenancy",
	});
}

export default Component;
