import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_oaqpieo.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_oaqpieo"/>`,
		"fallback": "oi:fullscreen-enter",
	});
}

export default Component;
