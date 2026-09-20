import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijw6f5b1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijw6f5b1e"/>`,
		"fallback": "simple-icons:fluxus",
	});
}

export default Component;
