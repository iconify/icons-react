import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsx06-b_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsx06-b_h"/>`,
		"fallback": "thesvg-color:bitsy",
	});
}

export default Component;
