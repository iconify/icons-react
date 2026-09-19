import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a-h3nsb6a.css';
import '../../css/a/av-zrzb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="a-h3nsb6a"/><path class="av-zrzb3e"/></g>`,
		"fallback": "hugeicons:calculate",
	});
}

export default Component;
