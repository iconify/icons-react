import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m9erokbyr.css';
import '../../css/w/w1ljqywwd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="m9erokbyr"/><path class="w1ljqywwd"/></g>`,
		"fallback": "cryptocurrency-color:flo",
	});
}

export default Component;
