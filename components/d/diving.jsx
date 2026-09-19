import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e83v_fbqx.css';
import '../../css/c/cl63yoooc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="e83v_fbqx"/><path class="cl63yoooc"/></g>`,
		"fallback": "icon-park-solid:diving",
	});
}

export default Component;
