import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vzl1p1bpj.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/g/gdk50x15v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vzl1p1bpj wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="gdk50x15v"/></g>`,
		"fallback": "withicons:database-blueprint",
	});
}

export default Component;
