import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msh-i_byo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msh-i_byo"/>`,
		"fallback": "pixelarticons:align-end-vertical-sharp",
	});
}

export default Component;
