import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fyq5n8b7t.css';
import '../../css/x/xtfl08bxn.css';
import '../../css/a/aqxq3ddkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fyq5n8b7t"/><path class="xtfl08bxn"/><path class="aqxq3ddkl"/></g>`,
		"fallback": "hugeicons:hierarchy-square-10",
	});
}

export default Component;
