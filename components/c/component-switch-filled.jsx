import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxh80fbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxh80fbsk"/>`,
		"fallback": "tdesign:component-switch-filled",
	});
}

export default Component;
