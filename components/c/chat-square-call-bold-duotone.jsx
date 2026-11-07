import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfpn6w7ca.css';
import '../../css/a/a2enu0stn.css';
import '../../css/f/fe-0ptbwe.css';
import '../../css/n/n1vfwo7wu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfpn6w7ca"/><path class="a2enu0stn"/><path class="fe-0ptbwe"/><path class="n1vfwo7wu"/>`,
		"fallback": "solar:chat-square-call-bold-duotone",
	});
}

export default Component;
