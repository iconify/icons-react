import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kvijvm0-z.css';
import '../../css/a/a9dwyac_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kvijvm0-z"/><path clip-rule="evenodd" class="a9dwyac_s"/></g>`,
		"fallback": "solar:hashtag-circle-bold",
	});
}

export default Component;
