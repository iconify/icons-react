import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii7cheb2p.css';
import '../../css/v/vvf5jwbia.css';
import '../../css/y/yy3gn3bdh.css';
import '../../css/w/wyz0op3ai.css';
import '../../css/j/j8ludxbpa.css';
import '../../css/a/akh1leb2l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii7cheb2p"/><path class="vvf5jwbia"/><path class="yy3gn3bdh"/><path class="wyz0op3ai"/><path class="j8ludxbpa"/><path class="akh1leb2l"/>`,
		"fallback": "selfhst:atuin",
	});
}

export default Component;
