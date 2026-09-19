import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0cgdac9j.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0cgdac9j"/>`,
		"fallback": "garden:car-fill-12",
	});
}

export default Component;
