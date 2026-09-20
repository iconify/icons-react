import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la5tmqqxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la5tmqqxd"/>`,
		"fallback": "thesvg:aboutdotme",
	});
}

export default Component;
