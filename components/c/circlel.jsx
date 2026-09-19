import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbz-x5bxz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbz-x5bxz"/>`,
		"fallback": "whh:circlel",
	});
}

export default Component;
