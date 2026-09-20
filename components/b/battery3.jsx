import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rom9c69aj.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rom9c69aj"/>`,
		"fallback": "picon:battery3",
	});
}

export default Component;
