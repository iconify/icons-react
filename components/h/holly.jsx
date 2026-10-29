import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lh_y89hot.css';
import '../../css/t/tjlpedbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lh_y89hot"/><path class="tjlpedbiu wm-a"/></g>`,
		"fallback": "withicons:holly",
	});
}

export default Component;
