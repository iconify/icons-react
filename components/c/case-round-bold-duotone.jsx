import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh2rpybbw.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/m/mjiehcc6m.css';
import '../../css/v/vcowebo7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dh2rpybbw"/><g class="xtpeb-edw"><path class="mjiehcc6m"/><path class="vcowebo7q"/></g>`,
		"fallback": "solar:case-round-bold-duotone",
	});
}

export default Component;
