import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwsi43bkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwsi43bkq"/>`,
		"fallback": "tdesign:fill-color-1-filled",
	});
}

export default Component;
