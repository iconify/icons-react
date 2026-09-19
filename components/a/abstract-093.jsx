import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr-n4dbhx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr-n4dbhx"/>`,
		"fallback": "game-icons:abstract-093",
	});
}

export default Component;
