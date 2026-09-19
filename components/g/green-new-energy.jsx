import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/g-847bcbd.css';
import '../../css/q/qfd3y4bqn.css';
import '../../css/f/fik22ihad.css';
import '../../css/a/ajnjn5bpc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="g-847bcbd"/><path class="qfd3y4bqn"/><path class="fik22ihad"/><path class="ajnjn5bpc"/></g>`,
		"fallback": "icon-park-solid:green-new-energy",
	});
}

export default Component;
