import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/e/e4g7cjnnz.css';
import '../../css/u/udpawm7qc.css';
import '../../css/e/e8fsmzb-b.css';
import '../../css/w/w_zi1y6nm.css';
import '../../css/j/jfah7cc4o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="e4g7cjnnz"/><path class="udpawm7qc"/><path class="e8fsmzb-b"/><path class="w_zi1y6nm"/><path class="jfah7cc4o"/></g>`,
		"fallback": "icon-park:bye",
	});
}

export default Component;
