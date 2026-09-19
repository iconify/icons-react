import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/kjfl4kbuv.css';
import '../../css/a/a273mvsrv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="kjfl4kbuv"/><path class="a273mvsrv"/></g>`,
		"fallback": "icon-park-outline:go-on",
	});
}

export default Component;
