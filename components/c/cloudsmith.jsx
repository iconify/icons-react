import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/toob-9b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="toob-9b9s"/>`,
		"fallback": "thesvg:cloudsmith",
	});
}

export default Component;
