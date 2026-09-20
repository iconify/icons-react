import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q36idpd-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q36idpd-z"/>`,
		"fallback": "thesvg-color:ccc",
	});
}

export default Component;
