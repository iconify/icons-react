import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj86u__cr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj86u__cr"/>`,
		"fallback": "game-icons:flamed-leaf",
	});
}

export default Component;
