import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jiat6mbef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jiat6mbef"/>`,
		"fallback": "streamline-logos:aim-logo-solid",
	});
}

export default Component;
