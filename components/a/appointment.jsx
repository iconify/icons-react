import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/c/c8rreybsc.css';
import '../../css/a/ajen750kr.css';
import '../../css/h/hek85dbhv.css';
import '../../css/t/tjuoppb1k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><circle class="c8rreybsc"/><path class="ajen750kr"/><circle class="hek85dbhv"/><path class="tjuoppb1k"/></g>`,
		"fallback": "icon-park:appointment",
	});
}

export default Component;
