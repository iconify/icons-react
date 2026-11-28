import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dih7k4bui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dih7k4bui"/>`,
		"fallback": "noviair-light:briefcase-search",
	});
}

export default Component;
