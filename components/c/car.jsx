import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r11i6spuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r11i6spuy"/>`,
		"fallback": "guidance:car",
	});
}

export default Component;
