import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k7jlomcpn.css';
import '../../css/t/t78f16meg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k7jlomcpn"/><path class="t78f16meg"/></g>`,
		"fallback": "tabler:atom-off",
	});
}

export default Component;
