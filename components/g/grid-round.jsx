import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuc2r_fef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuc2r_fef"/>`,
		"fallback": "coolicons:grid-round",
	});
}

export default Component;
