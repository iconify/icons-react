import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybvsl1p_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybvsl1p_w"/>`,
		"fallback": "reicon:grid2-filled",
	});
}

export default Component;
