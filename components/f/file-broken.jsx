import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zqckxhbcc.css';
import '../../css/t/t8sd5gbim.css';
import '../../css/t/twgphccua.css';
import '../../css/l/lony_3cne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zqckxhbcc"/><path class="t8sd5gbim"/><path class="twgphccua"/><path class="lony_3cne"/></g>`,
		"fallback": "andrsrxn:file-broken",
	});
}

export default Component;
