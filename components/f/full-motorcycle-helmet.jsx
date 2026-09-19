import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r15r1itiu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r15r1itiu"/>`,
		"fallback": "game-icons:full-motorcycle-helmet",
	});
}

export default Component;
