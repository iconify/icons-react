import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsr1kofml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsr1kofml"/>`,
		"fallback": "thesvg-color:i3",
	});
}

export default Component;
