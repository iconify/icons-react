import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ohfqsxv6s.css';
import '../../css/s/sgv53gcbw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ohfqsxv6s"/><path class="sgv53gcbw"/></g>`,
		"fallback": "heroicons-solid:arrow-up-tray",
	});
}

export default Component;
