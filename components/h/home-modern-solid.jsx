import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ijb5nqbws.css';
import '../../css/w/wm807dbrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ijb5nqbws"/><path clip-rule="evenodd" class="wm807dbrx"/></g>`,
		"fallback": "heroicons:home-modern-solid",
	});
}

export default Component;
