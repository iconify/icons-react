import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o63jc9t6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o63jc9t6f"/>`,
		"fallback": "withicons:circle-sketch",
	});
}

export default Component;
