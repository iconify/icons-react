import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl8ysu68j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl8ysu68j"/>`,
		"fallback": "keyline-icons:baby-girl",
	});
}

export default Component;
