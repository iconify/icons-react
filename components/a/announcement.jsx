import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/i/i_79_gb5t.css';
import '../../css/w/wbug46-jv.css';
import '../../css/y/y3dt-zlek.css';
import '../../css/z/zhj5w-a4z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="i_79_gb5t"/><path class="wbug46-jv"/><path class="y3dt-zlek"/><path class="zhj5w-a4z"/></g>`,
		"fallback": "icon-park:announcement",
	});
}

export default Component;
