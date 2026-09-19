import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lclse37hi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lclse37hi"/>`,
		"fallback": "iconamoon:close-circle-2-bold",
	});
}

export default Component;
