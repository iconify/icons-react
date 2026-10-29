import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emkqpcc5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emkqpcc5j"/>`,
		"fallback": "withicons:chevron-down-solid",
	});
}

export default Component;
