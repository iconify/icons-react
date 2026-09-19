import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq7gy1ill.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xq7gy1ill"/>`,
		"fallback": "basil:folder-delete-solid",
	});
}

export default Component;
