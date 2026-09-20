import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy9twf5me.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy9twf5me"/>`,
		"fallback": "tdesign:battery-add-filled",
	});
}

export default Component;
