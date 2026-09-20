import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r_ksdzbbu.css';
import '../../css/s/sydb_-mia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r_ksdzbbu"/><path class="sydb_-mia"/></g>`,
		"fallback": "reicon:face-plus-filled",
	});
}

export default Component;
