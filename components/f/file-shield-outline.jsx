import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l98ww57lo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l98ww57lo"/>`,
		"fallback": "flowbite:file-shield-outline",
	});
}

export default Component;
