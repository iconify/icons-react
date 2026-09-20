import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxtcf3b4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxtcf3b4m"/>`,
		"fallback": "token:coin98",
	});
}

export default Component;
