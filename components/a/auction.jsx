import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnr5_bciz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnr5_bciz"/>`,
		"fallback": "token:auction",
	});
}

export default Component;
