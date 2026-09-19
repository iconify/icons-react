import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyult47py.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyult47py"/>`,
		"fallback": "heroicons:arrow-up-on-square-stack",
	});
}

export default Component;
