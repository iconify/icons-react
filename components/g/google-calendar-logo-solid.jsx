import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg7js8y0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dg7js8y0k"/>`,
		"fallback": "streamline-logos:google-calendar-logo-solid",
	});
}

export default Component;
