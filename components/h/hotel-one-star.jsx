import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d1pq6kbqt.css';
import '../../css/j/j1-ugzb4p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="d1pq6kbqt"/><path class="j1-ugzb4p"/></g>`,
		"fallback": "streamline:hotel-one-star",
	});
}

export default Component;
