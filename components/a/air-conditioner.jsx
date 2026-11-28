import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n02t0mgcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n02t0mgcv"/>`,
		"fallback": "noviair:air-conditioner",
	});
}

export default Component;
