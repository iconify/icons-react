import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l484bmbsu.css';
import '../../css/w/w0sebyb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l484bmbsu"/><path class="w0sebyb3m wm-a"/></g>`,
		"fallback": "withicons:folder-minus",
	});
}

export default Component;
