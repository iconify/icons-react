import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffw97mbwu.css';
import '../../css/z/z15e8vbuh.css';
import '../../css/p/p9ipl3bri.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffw97mbwu"/><rect class="z15e8vbuh"/><path class="p9ipl3bri"/>`,
		"fallback": "famicons:hardware-chip",
	});
}

export default Component;
