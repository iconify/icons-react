import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/ka54cwbgk.css';
import '../../css/h/hwzym3_4n.css';
import '../../css/v/v5jdyxbhx.css';
import '../../css/k/kmhlufbif.css';
import '../../css/c/cl_3yb3gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ka54cwbgk wm-deco"/><path class="hwzym3_4n wm-deco"/><path class="v5jdyxbhx wm-deco"/><path class="kmhlufbif wm-k"/><path class="cl_3yb3gm wm-a"/></g>`,
		"fallback": "withicons:beef-blueprint",
	});
}

export default Component;
