import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/ibgn4jeja.css';
import '../../css/i/ica7owv_k.css';
import '../../css/c/cjt33cblq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ibgn4jeja"/><path class="ica7owv_k"/><path class="cjt33cblq"/></g>`,
		"fallback": "icon-park-outline:enter-key-one",
	});
}

export default Component;
