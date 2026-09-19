import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/ofdb5_b4q.css';
import '../../css/f/f_w9a8bji.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ofdb5_b4q"/><path class="f_w9a8bji"/></g>`,
		"fallback": "icon-park-solid:cycle-one",
	});
}

export default Component;
