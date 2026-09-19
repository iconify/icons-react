import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfg3w-tef.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfg3w-tef"/>`,
		"fallback": "garden:align-justify-fill-12",
	});
}

export default Component;
