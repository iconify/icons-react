import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vu12olbyp.css';
import '../../css/x/x56nlvbqu.css';
import '../../css/z/zgi57wboo.css';
import '../../css/c/cn7mk_15d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vu12olbyp wm-deco"/><path class="wm-deco x56nlvbqu"/><path class="wm-deco zgi57wboo"/><path class="cn7mk_15d"/></g>`,
		"fallback": "withicons:candy-blueprint",
	});
}

export default Component;
