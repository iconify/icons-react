import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qec68vzfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qec68vzfg"/>`,
		"fallback": "boxicons:euro",
	});
}

export default Component;
