import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvjs-pbfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvjs-pbfx"/>`,
		"fallback": "bx:bxl-twitter",
	});
}

export default Component;
