import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx9va6bxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx9va6bxi"/>`,
		"fallback": "simple-icons:hackmd",
	});
}

export default Component;
