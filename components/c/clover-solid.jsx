import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbcahyb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbcahyb3s"/>`,
		"fallback": "iconaut:clover-solid",
	});
}

export default Component;
