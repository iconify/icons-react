import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3hes8tqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h3hes8tqa"/>`,
		"fallback": "heroicons:arrow-top-right-on-square-solid",
	});
}

export default Component;
