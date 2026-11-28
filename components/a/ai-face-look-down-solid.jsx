import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqh8_rbrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqh8_rbrc"/>`,
		"fallback": "iconaut:ai-face-look-down-solid",
	});
}

export default Component;
