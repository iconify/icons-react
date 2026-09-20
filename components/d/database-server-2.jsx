import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/wrabl-blb.css';
import '../../css/u/ucwu-ui-i.css';
import '../../css/d/djs-grbxn.css';
import '../../css/n/nap9b3bla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="wrabl-blb"/><path class="ucwu-ui-i"/><path class="djs-grbxn"/><path class="nap9b3bla"/></g>`,
		"fallback": "streamline-sharp-color:database-server-2",
	});
}

export default Component;
