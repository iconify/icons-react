import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg46exbvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg46exbvm"/>`,
		"fallback": "heroicons-outline:arrow-long-up",
	});
}

export default Component;
