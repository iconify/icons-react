import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibn--6bup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ibn--6bup"/>`,
		"fallback": "keyline-icons:grid-2x3-sharp-fill",
	});
}

export default Component;
