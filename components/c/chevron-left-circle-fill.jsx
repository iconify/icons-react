import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8zje8b0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g8zje8b0p"/>`,
		"fallback": "si:chevron-left-circle-fill",
	});
}

export default Component;
