import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/m/m8k3h8pds.css';
import '../../css/z/zp6wnrbdq.css';
import '../../css/k/kjcpkzwgw.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="m8k3h8pds"/><path class="zp6wnrbdq"/><path class="kjcpkzwgw"/></g>`,
		"fallback": "marketeq:add-playlist",
	});
}

export default Component;
