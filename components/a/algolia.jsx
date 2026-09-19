import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry8pu_a8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry8pu_a8l"/>`,
		"fallback": "fontisto:algolia",
	});
}

export default Component;
