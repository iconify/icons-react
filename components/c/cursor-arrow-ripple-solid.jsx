import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ceq1he5nt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ceq1he5nt"/>`,
		"fallback": "heroicons:cursor-arrow-ripple-solid",
	});
}

export default Component;
