import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz7me76fi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz7me76fi"/>`,
		"fallback": "keyline-icons:bracket-arrow-right",
	});
}

export default Component;
