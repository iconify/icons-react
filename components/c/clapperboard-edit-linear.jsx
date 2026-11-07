import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x1559hbqt.css';
import '../../css/r/rcdawhb0x.css';
import '../../css/y/ykueg1b1u.css';
import '../../css/n/nr7t2bb1e.css';
import '../../css/u/udkm02blq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x1559hbqt"/><path class="rcdawhb0x"/><path class="ykueg1b1u"/><path class="nr7t2bb1e"/><path class="udkm02blq"/></g>`,
		"fallback": "solar:clapperboard-edit-linear",
	});
}

export default Component;
