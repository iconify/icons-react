import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfpn6w7ca.css';
import '../../css/i/ifnhtt1oc.css';
import '../../css/n/ndygbv4bu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfpn6w7ca"/><path clip-rule="evenodd" class="ifnhtt1oc"/><path clip-rule="evenodd" class="ndygbv4bu"/>`,
		"fallback": "solar:chat-square-quote-bold-duotone",
	});
}

export default Component;
