import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np8f4rmpi.css';
import '../../css/h/haf9aeb_s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np8f4rmpi"/><path class="haf9aeb_s"/>`,
		"fallback": "famicons:hardware-chip-sharp",
	});
}

export default Component;
