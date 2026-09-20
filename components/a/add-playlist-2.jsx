import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/m/m8k3h8pds.css';
import '../../css/x/xas6sta9n.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="m8k3h8pds"/><path class="xas6sta9n"/></g>`,
		"fallback": "marketeq:add-playlist-2",
	});
}

export default Component;
