import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi9pucb8a.css';
import '../../css/s/s08qpzh5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi9pucb8a"/><path clip-rule="evenodd" class="s08qpzh5i"/>`,
		"fallback": "stash:gif",
	});
}

export default Component;
