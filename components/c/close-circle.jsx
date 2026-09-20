import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkn84so2d.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkn84so2d"/>`,
		"fallback": "jam:close-circle",
	});
}

export default Component;
