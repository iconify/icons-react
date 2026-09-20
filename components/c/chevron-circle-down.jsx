import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs98yzfan.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs98yzfan"/>`,
		"fallback": "jam:chevron-circle-down",
	});
}

export default Component;
