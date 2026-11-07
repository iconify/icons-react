import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/f/f5ogxjm1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="f5ogxjm1y"/>`,
		"fallback": "solar:grid-2x2-bold-duotone",
	});
}

export default Component;
