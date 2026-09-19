import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8550rb9o.css';
import '../../css/d/dvr3kccns.css';
import '../../css/z/z3s59cbin.css';

const viewBox = {"width":10,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8550rb9o"/><path class="dvr3kccns"/><path class="z3s59cbin"/>`,
		"fallback": "fontisto:do-not-disturb",
	});
}

export default Component;
