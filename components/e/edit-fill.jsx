import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xa4k5mg7o.css';
import '../../css/z/za5m-1b2a.css';
import '../../css/b/b_zs5hbah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xa4k5mg7o"/><path class="za5m-1b2a"/><path class="b_zs5hbah"/></g>`,
		"fallback": "iconamoon:edit-fill",
	});
}

export default Component;
