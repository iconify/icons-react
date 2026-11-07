import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st-nwbl4q.css';
import '../../css/w/wr5pdbbjh.css';
import '../../css/q/qut6jfbbn.css';
import '../../css/h/h_l-sqbdb.css';
import '../../css/w/w8mj0cb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st-nwbl4q"/><path class="wr5pdbbjh"/><path class="qut6jfbbn"/><path class="h_l-sqbdb"/><path class="w8mj0cb0e"/>`,
		"fallback": "solar:gamepad-minimalistic-bold-duotone",
	});
}

export default Component;
