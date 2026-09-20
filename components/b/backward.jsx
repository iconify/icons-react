import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mat5cqbyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mat5cqbyj"/>`,
		"fallback": "prime:backward",
	});
}

export default Component;
