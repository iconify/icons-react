import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2xut1bzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a2xut1bzi"/>`,
		"fallback": "heroicons:chevron-up-down-solid",
	});
}

export default Component;
