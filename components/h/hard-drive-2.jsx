import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/w/wri4y-b5f.css';
import '../../css/m/m-5k35bsm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="wri4y-b5f"/><path class="m-5k35bsm"/></g>`,
		"fallback": "streamline-plump:hard-drive-2",
	});
}

export default Component;
