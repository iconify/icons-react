import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/dkbc58bxi.css';
import '../../css/h/hw1hnsbxh.css';
import '../../css/h/h3zgu7-gy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="dkbc58bxi"/><path clip-rule="evenodd" class="hw1hnsbxh"/><path class="h3zgu7-gy"/></g>`,
		"fallback": "icon-park-outline:globe",
	});
}

export default Component;
