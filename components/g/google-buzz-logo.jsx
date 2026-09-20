import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juz7x9ihj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juz7x9ihj"/>`,
		"fallback": "streamline-logos:google-buzz-logo",
	});
}

export default Component;
