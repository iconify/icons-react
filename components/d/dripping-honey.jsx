import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvkgz2bzz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvkgz2bzz"/>`,
		"fallback": "game-icons:dripping-honey",
	});
}

export default Component;
