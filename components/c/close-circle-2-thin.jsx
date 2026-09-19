import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0rxo6tin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0rxo6tin"/>`,
		"fallback": "iconamoon:close-circle-2-thin",
	});
}

export default Component;
