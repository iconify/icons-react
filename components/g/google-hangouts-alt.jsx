import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4r2-ed2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4r2-ed2z"/>`,
		"fallback": "uit:google-hangouts-alt",
	});
}

export default Component;
