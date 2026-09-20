import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czj-ojuap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czj-ojuap"/>`,
		"fallback": "simple-icons:alienware",
	});
}

export default Component;
