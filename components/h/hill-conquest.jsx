import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjiax_43i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjiax_43i"/>`,
		"fallback": "game-icons:hill-conquest",
	});
}

export default Component;
