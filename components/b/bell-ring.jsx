import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c564wd2vb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c564wd2vb"/>`,
		"fallback": "noviair-light:bell-ring",
	});
}

export default Component;
