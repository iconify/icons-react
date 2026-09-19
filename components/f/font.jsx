import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of8voccif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of8voccif"/>`,
		"fallback": "fontisto:font",
	});
}

export default Component;
