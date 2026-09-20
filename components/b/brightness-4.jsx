import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bguw7rb0s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bguw7rb0s"/>`,
		"fallback": "streamline-flex:brightness-4",
	});
}

export default Component;
