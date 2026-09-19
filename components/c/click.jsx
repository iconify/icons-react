import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/nwbhzkbcg.css';
import '../../css/s/ss7q9hbza.css';
import '../../css/c/c9-gn0brd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="nwbhzkbcg"/><path clip-rule="evenodd" class="ss7q9hbza"/><path class="c9-gn0brd"/></g>`,
		"fallback": "icon-park-solid:click",
	});
}

export default Component;
