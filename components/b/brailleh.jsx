import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls6rt8bmk.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls6rt8bmk"/>`,
		"fallback": "whh:brailleh",
	});
}

export default Component;
