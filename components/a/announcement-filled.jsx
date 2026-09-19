import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yypen4wvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yypen4wvc"/>`,
		"fallback": "griddy-icons:announcement-filled",
	});
}

export default Component;
