import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksaeh52hk.css';
import '../../css/u/uh3okxpvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksaeh52hk"/><path class="uh3okxpvx"/>`,
		"fallback": "bx:bxs-phone-outgoing",
	});
}

export default Component;
