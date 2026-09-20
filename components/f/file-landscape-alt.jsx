import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw003mslz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw003mslz"/>`,
		"fallback": "uil:file-landscape-alt",
	});
}

export default Component;
