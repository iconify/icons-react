import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbv__ub4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zbv__ub4l"/>`,
		"fallback": "streamline-logos:dribbble-logo-solid",
	});
}

export default Component;
