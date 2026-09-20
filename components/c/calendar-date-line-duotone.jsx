import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i9a7o5iov.css';
import '../../css/a/akmtuqbnt.css';
import '../../css/f/f39he8onf.css';
import '../../css/k/knpnsdbbr.css';
import '../../css/d/djtt46btr.css';
import '../../css/p/p_9-p8r6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i9a7o5iov"/><path class="akmtuqbnt"/><path class="f39he8onf"/><path class="knpnsdbbr"/><path class="djtt46btr"/><path class="p_9-p8r6d"/></g>`,
		"fallback": "solar:calendar-date-line-duotone",
	});
}

export default Component;
