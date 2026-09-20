import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs_o-ybdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs_o-ybdx"/>`,
		"fallback": "thesvg:confluence",
	});
}

export default Component;
