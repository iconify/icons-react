import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/krzm0-bqz.css';
import '../../css/l/le4wq9bhq.css';
import '../../css/z/zrg-nfbmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="krzm0-bqz"/><path class="le4wq9bhq"/><path class="zrg-nfbmx"/></g>`,
		"fallback": "hugeicons:computer-desk-03",
	});
}

export default Component;
