import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/q-8snxl6g.css';
import '../../css/y/y-fas1b5f.css';
import '../../css/d/djj-dackn.css';
import '../../css/d/duavt6vzq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="q-8snxl6g"/><path class="y-fas1b5f"/><path class="djj-dackn"/><path class="duavt6vzq"/></g>`,
		"fallback": "streamline-plump-color:fit-height",
	});
}

export default Component;
