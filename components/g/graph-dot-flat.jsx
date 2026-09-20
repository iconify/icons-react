import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uz675omgr.css';
import '../../css/c/cvipabcst.css';
import '../../css/s/sksjf7bpc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uz675omgr"/><path class="cvipabcst"/><path clip-rule="evenodd" class="sksjf7bpc"/></g>`,
		"fallback": "streamline-plump-color:graph-dot-flat",
	});
}

export default Component;
