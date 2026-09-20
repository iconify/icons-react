import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjcbu7bud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjcbu7bud"/>`,
		"fallback": "reicon:arrow-circle-right-filled",
	});
}

export default Component;
