import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zpodnwj0o.css';
import '../../css/s/s37zulbpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zpodnwj0o"/><path class="s37zulbpr wm-a"/></g>`,
		"fallback": "withicons:bed",
	});
}

export default Component;
