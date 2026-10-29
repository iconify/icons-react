import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc5_mbk_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc5_mbk_g"/>`,
		"fallback": "withicons:badge-x-solid",
	});
}

export default Component;
