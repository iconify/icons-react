import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw1vxy4ae.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g41oqhzpy.css';
import '../../css/i/ixg3tzbda.css';
import '../../css/n/n9n5a89mp.css';
import '../../css/o/ot4mtju-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw1vxy4ae secondary"/><g class="dt0cm9dhy primary"><path class="g41oqhzpy"/><path class="ixg3tzbda"/><path class="n9n5a89mp"/><path class="ot4mtju-j"/></g>`,
		"fallback": "iconaut:file-music-duo",
	});
}

export default Component;
