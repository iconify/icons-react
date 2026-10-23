import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m8byvuc8v.css';
import '../../css/x/xs20cf5gb.css';
import '../../css/z/zrz6m0b0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m8byvuc8v"/><path class="xs20cf5gb"/><path class="zrz6m0b0g"/></g>`,
		"fallback": "andrsrxn:file-wav",
	});
}

export default Component;
