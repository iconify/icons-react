import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yroy_z5el.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yroy_z5el"/>`,
		"fallback": "lsicon:add-chat-filled",
	});
}

export default Component;
