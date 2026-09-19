import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cclncg_2p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cclncg_2p"/>`,
		"fallback": "fa-solid:exchange-alt",
	});
}

export default Component;
