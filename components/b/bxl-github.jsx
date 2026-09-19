import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvrho5bdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hvrho5bdq"/>`,
		"fallback": "bx:bxl-github",
	});
}

export default Component;
