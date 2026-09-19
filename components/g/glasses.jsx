import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/na619iptd.css';
import '../../css/j/j-cnw4j5k.css';
import '../../css/i/ipnix8xme.css';
import '../../css/g/gne64qddn.css';
import '../../css/m/mmoklrktj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><circle class="na619iptd"/><circle class="j-cnw4j5k"/><path class="ipnix8xme"/><path class="gne64qddn"/><path class="mmoklrktj"/></g>`,
		"fallback": "icon-park:glasses",
	});
}

export default Component;
