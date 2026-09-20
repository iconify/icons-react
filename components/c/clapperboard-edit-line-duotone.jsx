import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x1559hbqt.css';
import '../../css/h/hd_r6sdbz.css';
import '../../css/u/udkm02blq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x1559hbqt"/><path class="hd_r6sdbz"/><path class="udkm02blq"/></g>`,
		"fallback": "solar:clapperboard-edit-line-duotone",
	});
}

export default Component;
