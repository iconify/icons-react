import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z--xdhb7r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z--xdhb7r"/>`,
		"fallback": "streamline:focus-points",
	});
}

export default Component;
