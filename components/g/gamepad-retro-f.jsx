import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8si76bgz.css';

const viewBox = {"width":24,"height":24,"top":-6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8si76bgz"/>`,
		"fallback": "jam:gamepad-retro-f",
	});
}

export default Component;
