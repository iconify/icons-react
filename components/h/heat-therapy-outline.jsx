import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i77f6iezr.css';
import '../../css/d/ddg2v8bix.css';
import '../../css/v/v0i5h5b5f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i77f6iezr"/><path clip-rule="evenodd" class="ddg2v8bix"/><path class="v0i5h5b5f"/></g>`,
		"fallback": "healthicons:heat-therapy-outline",
	});
}

export default Component;
