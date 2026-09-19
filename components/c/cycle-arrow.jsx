import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/tznuv8z9k.css';
import '../../css/g/gzx-mvbqo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="tznuv8z9k"/><path class="gzx-mvbqo"/></g>`,
		"fallback": "icon-park-outline:cycle-arrow",
	});
}

export default Component;
