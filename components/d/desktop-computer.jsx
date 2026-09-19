import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzf2h5bth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzf2h5bth"/>`,
		"fallback": "cbi:desktop-computer",
	});
}

export default Component;
