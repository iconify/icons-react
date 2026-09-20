import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuf444b1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kuf444b1l"/>`,
		"fallback": "lets-icons:favorites-fill",
	});
}

export default Component;
