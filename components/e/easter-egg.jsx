import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/x/xqf3vee3z.css';
import '../../css/c/c2xn06beg.css';
import '../../css/n/nedvgi7rt.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="xqf3vee3z"/><path class="c2xn06beg"/><path class="nedvgi7rt"/></g>`,
		"fallback": "streamline-stickies-color:easter-egg",
	});
}

export default Component;
