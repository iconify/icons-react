import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lma4qjauv.css';
import '../../css/l/l4miwgbku.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="lma4qjauv"/><path class="l4miwgbku"/></g>`,
		"fallback": "cryptocurrency-color:btg",
	});
}

export default Component;
