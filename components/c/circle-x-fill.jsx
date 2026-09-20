import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jawpx2m9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jawpx2m9m"/>`,
		"fallback": "keyline-icons:circle-x-fill",
	});
}

export default Component;
