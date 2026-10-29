import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khu5r_tqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khu5r_tqb"/>`,
		"fallback": "withicons:cube-solid",
	});
}

export default Component;
