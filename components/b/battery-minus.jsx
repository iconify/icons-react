import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqd65yb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqd65yb8b"/>`,
		"fallback": "noviair-light:battery-minus",
	});
}

export default Component;
