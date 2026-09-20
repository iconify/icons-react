import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f47fbkbfi.css';
import '../../css/z/z8ew59bqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f47fbkbfi"/><path class="z8ew59bqj"/>`,
		"fallback": "stash:bell-duotone",
	});
}

export default Component;
