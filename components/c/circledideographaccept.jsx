import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsize-wde.css';
import '../../css/n/nw8rr6bkb.css';
import '../../css/b/bl-vv4mlh.css';
import '../../css/m/mp_j2rb-x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="wsize-wde"/><path class="nw8rr6bkb"/><path class="bl-vv4mlh"/><path class="mp_j2rb-x"/>`,
		"fallback": "fxemoji:circledideographaccept",
	});
}

export default Component;
