import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s769v6bab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s769v6bab"/>`,
		"fallback": "proicons:google-2",
	});
}

export default Component;
