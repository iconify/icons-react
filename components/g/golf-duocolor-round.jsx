import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l1txs0sri.css';
import '../../css/p/ps-0evoyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l1txs0sri"/><path class="ps-0evoyv"/></g>`,
		"fallback": "coolicons:golf-duocolor-round",
	});
}

export default Component;
