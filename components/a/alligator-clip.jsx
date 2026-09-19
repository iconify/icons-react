import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn6vgnbbf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn6vgnbbf"/>`,
		"fallback": "game-icons:alligator-clip",
	});
}

export default Component;
