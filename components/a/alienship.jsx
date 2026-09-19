import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-5w_6mjl.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-5w_6mjl"/>`,
		"fallback": "whh:alienship",
	});
}

export default Component;
