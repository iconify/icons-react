import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz5sdrwre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz5sdrwre"/>`,
		"fallback": "uil:channel-add",
	});
}

export default Component;
