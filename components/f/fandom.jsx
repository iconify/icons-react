import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm0xpbe5i.css';
import '../../css/s/sla_3qh9n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm0xpbe5i"/><path class="sla_3qh9n"/>`,
		"fallback": "selfhst:fandom",
	});
}

export default Component;
