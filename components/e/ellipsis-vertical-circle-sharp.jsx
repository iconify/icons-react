import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtghzbbpn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtghzbbpn"/>`,
		"fallback": "famicons:ellipsis-vertical-circle-sharp",
	});
}

export default Component;
