import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcbv8hujb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcbv8hujb"/>`,
		"fallback": "game-icons:hang-glider",
	});
}

export default Component;
