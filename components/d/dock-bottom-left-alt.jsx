import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/silwsnb3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="silwsnb3v"/>`,
		"fallback": "boxicons:dock-bottom-left-alt",
	});
}

export default Component;
