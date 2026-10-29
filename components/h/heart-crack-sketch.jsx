import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qz7xklilu.css';
import '../../css/v/vuuwxkj-f.css';
import '../../css/x/x50jb-e5t.css';
import '../../css/h/h5x3xzb0w.css';
import '../../css/o/o7y4z0d9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qz7xklilu"/><path class="vuuwxkj-f wm-k"/><path class="wm-a x50jb-e5t"/><path class="h5x3xzb0w wm-k"/><path class="o7y4z0d9x wm-a"/></g>`,
		"fallback": "withicons:heart-crack-sketch",
	});
}

export default Component;
