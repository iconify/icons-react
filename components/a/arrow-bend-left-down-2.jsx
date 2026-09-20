import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/l/lifmdkbdt.css';
import '../../css/u/ug4tv-brd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="lifmdkbdt"/><path class="ug4tv-brd"/></g>`,
		"fallback": "streamline-color:arrow-bend-left-down-2",
	});
}

export default Component;
