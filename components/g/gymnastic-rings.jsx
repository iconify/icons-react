import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n2p27uj6g.css';
import '../../css/a/asa4rkbid.css';
import '../../css/r/rpqzuubsh.css';
import '../../css/f/fago55b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="n2p27uj6g"/><path class="asa4rkbid"/><path class="rpqzuubsh"/><path class="fago55b3x"/></g>`,
		"fallback": "hugeicons:gymnastic-rings",
	});
}

export default Component;
