import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igso8l8pc.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igso8l8pc"/>`,
		"fallback": "jam:chevrons-down-right",
	});
}

export default Component;
