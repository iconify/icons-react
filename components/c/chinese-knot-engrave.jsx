import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bvn0ecifr.css';
import '../../css/z/z2st76yla.css';
import '../../css/y/ylb7kmbxq.css';
import '../../css/w/w0-632-cs.css';
import '../../css/j/jam8cccqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bvn0ecifr wm-k"/><path class="wm-a z2st76yla"/><path class="wm-shadow ylb7kmbxq"/><path class="w0-632-cs wm-k"/><path class="jam8cccqq wm-a"/></g>`,
		"fallback": "withicons:chinese-knot-engrave",
	});
}

export default Component;
