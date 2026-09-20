import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxh0ikvaa.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxh0ikvaa"/>`,
		"fallback": "radix-icons:cube",
	});
}

export default Component;
