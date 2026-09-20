import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfmahnb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cfmahnb8y"/>`,
		"fallback": "stash:data-numbers-solid",
	});
}

export default Component;
