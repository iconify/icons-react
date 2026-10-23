import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np4301h5k.css';
import '../../css/j/j8ev3vexx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np4301h5k"/><path class="j8ev3vexx"/>`,
		"fallback": "lucide-extended:calendar-chevrons-left-filled",
	});
}

export default Component;
