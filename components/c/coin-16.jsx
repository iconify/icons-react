import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1_ko4blm.css';
import '../../css/x/xqqc18b0h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1_ko4blm"/><path clip-rule="evenodd" class="xqqc18b0h"/>`,
		"fallback": "qlementine-icons:coin-16",
	});
}

export default Component;
