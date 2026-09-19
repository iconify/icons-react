import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v55n_tw0r.css';
import '../../css/d/drm2z6b3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v55n_tw0r"/><path clip-rule="evenodd" class="drm2z6b3a"/></g>`,
		"fallback": "gg:card-clubs",
	});
}

export default Component;
