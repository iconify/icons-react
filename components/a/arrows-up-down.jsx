import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k7d7cnbei.css';
import '../../css/o/oagb2jb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k7d7cnbei"/><path class="oagb2jb1n"/></g>`,
		"fallback": "iconaut:arrows-up-down",
	});
}

export default Component;
