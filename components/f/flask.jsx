import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfx_deblx.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfx_deblx"/>`,
		"fallback": "jam:flask",
	});
}

export default Component;
