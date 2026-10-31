import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob20kwbzk.css';
import '../../css/l/l1kbw1b1l.css';
import '../../css/x/x0hxdhfls.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob20kwbzk"/><path class="l1kbw1b1l"/><path class="x0hxdhfls"/>`,
		"fallback": "tabler-flags:iceland",
	});
}

export default Component;
