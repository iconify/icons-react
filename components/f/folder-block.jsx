import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m0xrrzbhk.css';
import '../../css/p/p-7mrfbjr.css';
import '../../css/q/qs-wobbnb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="m0xrrzbhk"/><circle class="p-7mrfbjr"/><path class="qs-wobbnb"/></g>`,
		"fallback": "icon-park:folder-block",
	});
}

export default Component;
