import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgs_ek1rs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgs_ek1rs"/>`,
		"fallback": "mingcute:columns-4-fill",
	});
}

export default Component;
