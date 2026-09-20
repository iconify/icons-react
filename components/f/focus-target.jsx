import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw-7a5b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw-7a5b3x"/>`,
		"fallback": "uil:focus-target",
	});
}

export default Component;
