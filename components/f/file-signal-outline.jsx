import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/slf0iuw5z.css';
import '../../css/t/tbrdh9i-a.css';
import '../../css/w/wc8u692rw.css';
import '../../css/m/m-_pys7sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="slf0iuw5z"/><path class="tbrdh9i-a"/><path clip-rule="evenodd" class="wc8u692rw"/><path clip-rule="evenodd" class="m-_pys7sn"/></g>`,
		"fallback": "solar:file-signal-outline",
	});
}

export default Component;
