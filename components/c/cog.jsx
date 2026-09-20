import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyixq8p0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyixq8p0h"/>`,
		"fallback": "uil:cog",
	});
}

export default Component;
