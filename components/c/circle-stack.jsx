import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyqpfl7lx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyqpfl7lx"/>`,
		"fallback": "heroicons:circle-stack",
	});
}

export default Component;
