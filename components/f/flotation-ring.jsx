import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nop3be92g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nop3be92g"/>`,
		"fallback": "fontisto:flotation-ring",
	});
}

export default Component;
