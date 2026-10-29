import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jco273hcj.css';
import '../../css/z/zbmrop1yu.css';
import '../../css/y/yjrsjrbze.css';
import '../../css/u/uitsqebbd.css';
import '../../css/l/lbi3uqb8i.css';
import '../../css/d/dmq8488ic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="jco273hcj wm-deco"/><path class="wm-deco zbmrop1yu"/><path class="wm-deco yjrsjrbze"/><path class="uitsqebbd wm-k"/><path class="lbi3uqb8i wm-a"/><path class="dmq8488ic wm-k"/></g>`,
		"fallback": "withicons:guitar-blueprint",
	});
}

export default Component;
