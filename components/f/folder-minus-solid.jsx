import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zry5a9qkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zry5a9qkn"/>`,
		"fallback": "mynaui:folder-minus-solid",
	});
}

export default Component;
