import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brj23qz8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brj23qz8h"/>`,
		"fallback": "reicon:arrow-up2-filled",
	});
}

export default Component;
