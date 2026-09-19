import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/ds4dt58hw.css';
import '../../css/g/g-js9qb0w.css';
import '../../css/k/kl6dl5bmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ds4dt58hw"/><path class="g-js9qb0w"/><path class="kl6dl5bmn"/></g>`,
		"fallback": "iconoir:forward-message",
	});
}

export default Component;
