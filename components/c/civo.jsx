import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp0rl852a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp0rl852a"/>`,
		"fallback": "thesvg-color:civo",
	});
}

export default Component;
