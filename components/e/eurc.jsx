import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc-rvh1_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc-rvh1_g"/>`,
		"fallback": "token:eurc",
	});
}

export default Component;
