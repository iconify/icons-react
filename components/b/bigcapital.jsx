import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwv3g5b-i.css';
import '../../css/x/xftpn6bca.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwv3g5b-i"/><path class="xftpn6bca"/>`,
		"fallback": "selfhst:bigcapital",
	});
}

export default Component;
