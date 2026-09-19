import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5crd0brz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5crd0brz"/>`,
		"fallback": "game-icons:chemical-tank",
	});
}

export default Component;
