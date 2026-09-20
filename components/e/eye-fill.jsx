import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/siux78bid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="siux78bid"/>`,
		"fallback": "lets-icons:eye-fill",
	});
}

export default Component;
