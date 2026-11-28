import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmjp0wy6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmjp0wy6f primary"/>`,
		"fallback": "iconaut:chevron-double-left-duotone",
	});
}

export default Component;
