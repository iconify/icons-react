import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upbpp921n.css';
import '../../css/k/k-g2zcgtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upbpp921n"/><path class="k-g2zcgtu"/>`,
		"fallback": "prime:credit-card",
	});
}

export default Component;
