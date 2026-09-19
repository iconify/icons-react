import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fsk4bfdbc.css';
import '../../css/y/yz9e8zbsv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fsk4bfdbc"/><path clip-rule="evenodd" class="yz9e8zbsv"/></g>`,
		"fallback": "heroicons-solid:clipboard-list",
	});
}

export default Component;
