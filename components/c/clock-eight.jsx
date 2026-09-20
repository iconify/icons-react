import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs57cbclk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bs57cbclk"/>`,
		"fallback": "uil:clock-eight",
	});
}

export default Component;
