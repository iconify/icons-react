import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_o-u7b9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="b_o-u7b9e"/>`,
		"fallback": "boxicons:button-filled",
	});
}

export default Component;
