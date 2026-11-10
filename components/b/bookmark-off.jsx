import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qylfpj-0m.css';
import '../../css/l/lvd0m0boj.css';
import '../../css/a/axqprfbvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qylfpj-0m"/><path class="lvd0m0boj"/><path class="axqprfbvd"/></g>`,
		"fallback": "andrsrxn:bookmark-off",
	});
}

export default Component;
