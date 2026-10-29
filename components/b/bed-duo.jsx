import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gzoteshru.css';
import '../../css/f/fyq-yv0yz.css';
import '../../css/s/s37zulbpr.css';
import '../../css/z/zpodnwj0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gzoteshru"/><path class="fyq-yv0yz wm-a"/><path class="s37zulbpr wm-a"/><path class="zpodnwj0o"/></g>`,
		"fallback": "withicons:bed-duo",
	});
}

export default Component;
