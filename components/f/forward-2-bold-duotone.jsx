import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epu_iqbjv.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/g/g__2d8btp.css';
import '../../css/k/k1tpnh3pq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="epu_iqbjv"/><g class="xtpeb-edw"><path class="g__2d8btp"/><path class="k1tpnh3pq"/></g>`,
		"fallback": "solar:forward-2-bold-duotone",
	});
}

export default Component;
