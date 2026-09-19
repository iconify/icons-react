import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f7--fccjq.css';
import '../../css/z/z791spbav.css';
import '../../css/b/b9jcm8g0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="f7--fccjq"/><path class="z791spbav"/><path class="b9jcm8g0b"/></g>`,
		"fallback": "hugeicons:folder-open",
	});
}

export default Component;
