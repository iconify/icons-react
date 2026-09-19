import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsg_c7jms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jsg_c7jms"/>`,
		"fallback": "heroicons:folder-arrow-down-solid",
	});
}

export default Component;
