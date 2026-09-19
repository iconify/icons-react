import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w8cn39pfd.css';
import '../../css/m/mx3h4guvt.css';
import '../../css/u/ut42kkwkj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w8cn39pfd"/><path clip-rule="evenodd" class="mx3h4guvt"/><path clip-rule="evenodd" class="ut42kkwkj"/></g>`,
		"fallback": "healthicons:contraceptive-injection-outline",
	});
}

export default Component;
