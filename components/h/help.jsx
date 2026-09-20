import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/f/fbm1ezbyh.css';
import '../../css/g/g6cp-sb3i.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="fbm1ezbyh"/><path class="g6cp-sb3i"/></g>`,
		"fallback": "streamline-stickies-color:help",
	});
}

export default Component;
