import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u250_-x4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="u250_-x4y"/>`,
		"fallback": "wordpress:inline-image",
	});
}

export default Component;
