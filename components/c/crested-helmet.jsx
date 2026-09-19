import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn-w70mvz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn-w70mvz"/>`,
		"fallback": "game-icons:crested-helmet",
	});
}

export default Component;
