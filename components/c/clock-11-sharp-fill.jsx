import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9l-ukbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c9l-ukbpx"/>`,
		"fallback": "keyline-icons:clock-11-sharp-fill",
	});
}

export default Component;
