import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aae35_ljn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aae35_ljn"/>`,
		"fallback": "akar-icons:arrow-forward-thick-fill",
	});
}

export default Component;
