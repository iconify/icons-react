import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m8byvuc8v.css';
import '../../css/x/xs20cf5gb.css';
import '../../css/t/t6avtvb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m8byvuc8v"/><path class="xs20cf5gb"/><path class="t6avtvb5z"/></g>`,
		"fallback": "andrsrxn:file-ppt",
	});
}

export default Component;
