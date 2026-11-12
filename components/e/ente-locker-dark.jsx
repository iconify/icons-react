import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phg1s7mys.css';
import '../../css/g/gr0vkeb_g.css';
import '../../css/p/pd-439hvt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phg1s7mys"/><path class="gr0vkeb_g"/><path class="pd-439hvt"/>`,
		"fallback": "selfhst:ente-locker-dark",
	});
}

export default Component;
