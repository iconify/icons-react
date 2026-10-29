import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/b74rkzv8a.css';
import '../../css/v/vy7ah-75i.css';
import '../../css/m/mz2x21b7z.css';
import '../../css/l/l-wis9b-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="b74rkzv8a wm-deco"/><path class="vy7ah-75i wm-k"/><path class="mz2x21b7z wm-a"/><path class="l-wis9b-x wm-s"/></g>`,
		"fallback": "withicons:eye-off-blueprint",
	});
}

export default Component;
