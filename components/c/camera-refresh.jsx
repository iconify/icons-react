import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt3nwxb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt3nwxb_k"/>`,
		"fallback": "noviair-light:camera-refresh",
	});
}

export default Component;
