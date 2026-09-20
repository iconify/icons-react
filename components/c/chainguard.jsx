import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx2j0nbuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx2j0nbuo"/>`,
		"fallback": "thesvg-color:chainguard",
	});
}

export default Component;
