import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/i4it1pzvk.css';
import '../../css/t/t218te2ox.css';
import '../../css/e/ezx00wbry.css';
import '../../css/y/ytq6kubqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="i4it1pzvk wm-deco"/><path class="t218te2ox wm-deco"/><path class="ezx00wbry wm-k"/><path class="wm-a ytq6kubqz"/></g>`,
		"fallback": "withicons:address-book-blueprint",
	});
}

export default Component;
