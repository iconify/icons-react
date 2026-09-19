import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x-lcw_biq.css';
import '../../css/r/rxosqmb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x-lcw_biq"/><path clip-rule="evenodd" class="rxosqmb8a"/></g>`,
		"fallback": "heroicons:archive-box-arrow-down-solid",
	});
}

export default Component;
