import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu2b2g8_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu2b2g8_e"/>`,
		"fallback": "tdesign:command",
	});
}

export default Component;
