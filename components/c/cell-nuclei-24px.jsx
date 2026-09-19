import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/afn5g7bzd.css';
import '../../css/m/md5aejbhd.css';
import '../../css/a/aylzo1b9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="afn5g7bzd"/><path clip-rule="evenodd" class="md5aejbhd"/><path clip-rule="evenodd" class="aylzo1b9n"/></g>`,
		"fallback": "healthicons:cell-nuclei-24px",
	});
}

export default Component;
