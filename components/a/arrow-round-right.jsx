import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/b/bh8195-dp.css';
import '../../css/h/hixrr3y3r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="bh8195-dp"/><path class="hixrr3y3r"/></g>`,
		"fallback": "streamline-color:arrow-round-right",
	});
}

export default Component;
