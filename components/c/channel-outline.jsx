import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/lkjlz36vc.css';
import '../../css/u/ufw-idufz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="lkjlz36vc"/><path class="ufw-idufz"/></g>`,
		"fallback": "bitcoin-icons:channel-outline",
	});
}

export default Component;
