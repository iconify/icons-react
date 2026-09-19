import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/sok5cxb0n.css';
import '../../css/n/nzdyrns-l.css';
import '../../css/x/xjrqukbum.css';
import '../../css/v/va25inbmk.css';
import '../../css/r/r5i-inbdw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="sok5cxb0n"/><path class="nzdyrns-l"/><path class="xjrqukbum"/><rect class="va25inbmk"/><rect class="r5i-inbdw"/></g>`,
		"fallback": "icon-park:castle",
	});
}

export default Component;
