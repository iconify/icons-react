import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxpl77h-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxpl77h-q"/>`,
		"fallback": "stash:dollar-sign-light",
	});
}

export default Component;
