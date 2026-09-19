import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmvn587za.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jmvn587za"/>`,
		"fallback": "heroicons:bars-3-bottom-right-solid",
	});
}

export default Component;
