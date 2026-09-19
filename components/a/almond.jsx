import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg7r2pbzj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg7r2pbzj"/>`,
		"fallback": "game-icons:almond",
	});
}

export default Component;
