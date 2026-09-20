import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y86geebsg.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y86geebsg"/>`,
		"fallback": "memory:bag-personal",
	});
}

export default Component;
