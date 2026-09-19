import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/v2ksgnx-u.css';
import '../../css/b/b45yybqoa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path clip-rule="evenodd" class="v2ksgnx-u"/><path class="b45yybqoa"/></g>`,
		"fallback": "icon-park-outline:bus-two",
	});
}

export default Component;
