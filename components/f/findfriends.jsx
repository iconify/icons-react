import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/reg5pddhc.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="reg5pddhc"/>`,
		"fallback": "whh:findfriends",
	});
}

export default Component;
