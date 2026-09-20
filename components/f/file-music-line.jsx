import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yciimpb-x.css';
import '../../css/o/o0a-r_1pg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yciimpb-x"/><path class="o0a-r_1pg"/>`,
		"fallback": "mingcute:file-music-line",
	});
}

export default Component;
