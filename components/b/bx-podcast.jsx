import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz3f5jbrh.css';
import '../../css/y/yszcp8i3o.css';
import '../../css/b/bhdojms-k.css';
import '../../css/m/mj_kz-61s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="dz3f5jbrh"/><path class="yszcp8i3o"/><path class="bhdojms-k"/><path class="mj_kz-61s"/>`,
		"fallback": "bx:bx-podcast",
	});
}

export default Component;
