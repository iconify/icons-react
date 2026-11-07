import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oio3n0tpv.css';
import '../../css/n/nka8deypl.css';
import '../../css/w/wm3j448rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oio3n0tpv"/><path clip-rule="evenodd" class="nka8deypl"/><path class="wm3j448rr"/>`,
		"fallback": "solar:file-search-bold",
	});
}

export default Component;
