import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdti4s_xp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdti4s_xp"/>`,
		"fallback": "token:glow",
	});
}

export default Component;
