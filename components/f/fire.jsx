import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl0mm4bgl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl0mm4bgl"/>`,
		"fallback": "pinhead:fire",
	});
}

export default Component;
