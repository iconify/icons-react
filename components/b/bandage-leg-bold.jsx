import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8bspe97r.css';
import '../../css/o/odhp80tlq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8bspe97r"/><path class="odhp80tlq"/>`,
		"fallback": "streamline-ultimate:bandage-leg-bold",
	});
}

export default Component;
