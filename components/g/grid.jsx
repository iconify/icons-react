import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aj5gz5b0j.css';
import '../../css/t/tontn-b1j.css';

const viewBox = {"width":31,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aj5gz5b0j"/><path class="tontn-b1j"/></g>`,
		"fallback": "et:grid",
	});
}

export default Component;
