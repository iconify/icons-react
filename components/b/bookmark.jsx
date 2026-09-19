import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfk4z3biw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfk4z3biw"/>`,
		"fallback": "boxicons:bookmark",
	});
}

export default Component;
