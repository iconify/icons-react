import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzlh_1qrc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzlh_1qrc"/>`,
		"fallback": "game-icons:abstract-072",
	});
}

export default Component;
