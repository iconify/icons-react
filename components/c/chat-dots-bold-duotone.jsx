import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfpn6w7ca.css';
import '../../css/f/f5-jmthrp.css';
import '../../css/z/zzh-9abbr.css';
import '../../css/e/efx70_a6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfpn6w7ca"/><path class="f5-jmthrp"/><path class="zzh-9abbr"/><path class="efx70_a6m"/>`,
		"fallback": "solar:chat-dots-bold-duotone",
	});
}

export default Component;
