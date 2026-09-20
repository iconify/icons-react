import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyg0gkjkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kyg0gkjkh"/>`,
		"fallback": "stash:eye-closed-light",
	});
}

export default Component;
