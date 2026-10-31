import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt84qfb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt84qfb8d"/>`,
		"fallback": "coolicons:clock-11-round",
	});
}

export default Component;
