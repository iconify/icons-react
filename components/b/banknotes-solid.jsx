import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xo01bq3gx.css';
import '../../css/h/hebxe4pns.css';
import '../../css/k/k2dqs591a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xo01bq3gx"/><path clip-rule="evenodd" class="hebxe4pns"/><path class="k2dqs591a"/></g>`,
		"fallback": "heroicons:banknotes-solid",
	});
}

export default Component;
