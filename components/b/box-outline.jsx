import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_u9_2ywp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u_u9_2ywp"/>`,
		"fallback": "solar:box-outline",
	});
}

export default Component;
