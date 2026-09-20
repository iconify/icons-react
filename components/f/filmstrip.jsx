import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prd4v3_sp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prd4v3_sp"/>`,
		"fallback": "mdi-light:filmstrip",
	});
}

export default Component;
