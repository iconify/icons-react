import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy2xg2bcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy2xg2bcc"/>`,
		"fallback": "uil:discord",
	});
}

export default Component;
