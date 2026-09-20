import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/z/z57epd52t.css';
import '../../css/q/qdcm0hb6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="z57epd52t"/><path class="qdcm0hb6q"/></g>`,
		"fallback": "streamline-sharp-color:camera-video",
	});
}

export default Component;
