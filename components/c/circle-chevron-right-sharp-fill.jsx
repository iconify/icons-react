import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb-r8iu1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb-r8iu1u"/>`,
		"fallback": "keyline-icons:circle-chevron-right-sharp-fill",
	});
}

export default Component;
