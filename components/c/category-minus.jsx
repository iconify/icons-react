import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkso2bcjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkso2bcjm"/>`,
		"fallback": "tabler:category-minus",
	});
}

export default Component;
