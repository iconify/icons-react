import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glysl4b1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glysl4b1e"/>`,
		"fallback": "bxs:basketball",
	});
}

export default Component;
