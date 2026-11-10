import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r78bcwb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r78bcwb8x"/>`,
		"fallback": "sidekickicons:folder-x-mark-solid",
	});
}

export default Component;
