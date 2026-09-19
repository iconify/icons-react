import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr4g3w4iu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr4g3w4iu"/>`,
		"fallback": "game-icons:basketball-jersey",
	});
}

export default Component;
