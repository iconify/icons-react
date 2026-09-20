import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/paxm8bnar.css';
import '../../css/p/pf74t1b5i.css';
import '../../css/m/m00tzbc5j.css';
import '../../css/c/cqutxybsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="paxm8bnar"/><path class="pf74t1b5i"/><path class="m00tzbc5j"/><path class="cqutxybsx"/></g>`,
		"fallback": "proicons:emoji-heart-eyes",
	});
}

export default Component;
