import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdv8sj9wu.css';
import '../../css/a/a5yf-1k-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdv8sj9wu"/><path class="a5yf-1k-d"/>`,
		"fallback": "bxl:aws",
	});
}

export default Component;
