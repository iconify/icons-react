import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh3o1ob7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh3o1ob7m"/>`,
		"fallback": "boxicons:cigarette-filled",
	});
}

export default Component;
