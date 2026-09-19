import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjk3dvi1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjk3dvi1i"/>`,
		"fallback": "eva:archive-fill",
	});
}

export default Component;
