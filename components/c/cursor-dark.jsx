import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pazmnhbnx.css';

const viewBox = {"width":466.73,"height":532.09};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pazmnhbnx"/>`,
		"fallback": "thesvg-color:cursor-dark",
	});
}

export default Component;
