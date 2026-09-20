import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftfbryb0n.css';
import '../../css/p/pfc59dpqc.css';
import '../../css/u/ufnun_9wh.css';
import '../../css/u/ucp_klm1l.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftfbryb0n"/><path class="pfc59dpqc"/><path class="ufnun_9wh"/><path class="ucp_klm1l"/>`,
		"fallback": "openmoji:delete",
	});
}

export default Component;
