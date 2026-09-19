import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f-vz84but.css';
import '../../css/i/iaw5f6gss.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f-vz84but"/><path class="iaw5f6gss"/></g>`,
		"fallback": "bi:clock",
	});
}

export default Component;
