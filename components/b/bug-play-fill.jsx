import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-hcm6bfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-hcm6bfg"/>`,
		"fallback": "mingcute:bug-play-fill",
	});
}

export default Component;
