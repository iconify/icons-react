import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1_6p3b4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1_6p3b4r"/>`,
		"fallback": "tdesign:add-circle-filled",
	});
}

export default Component;
