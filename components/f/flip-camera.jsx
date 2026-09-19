import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xl-dk0l-y.css';
import '../../css/t/tm9f74uep.css';
import '../../css/i/igbkoxb2y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="xl-dk0l-y"/><circle class="tm9f74uep"/><path class="igbkoxb2y"/></g>`,
		"fallback": "icon-park-outline:flip-camera",
	});
}

export default Component;
