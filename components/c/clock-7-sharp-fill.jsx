import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa7q40b1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aa7q40b1r"/>`,
		"fallback": "keyline-icons:clock-7-sharp-fill",
	});
}

export default Component;
