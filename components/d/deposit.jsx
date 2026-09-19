import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/do939nu1l.css';
import '../../css/r/rw9q-f79i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="do939nu1l"/><path class="rw9q-f79i"/></g>`,
		"fallback": "icon-park-outline:deposit",
	});
}

export default Component;
