import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/ealqh_bzl.css';
import '../../css/y/yckat5-wu.css';
import '../../css/z/z972s-b0h.css';
import '../../css/e/e4zyhxw3z.css';
import '../../css/g/g7bj_5l-m.css';
import '../../css/w/wv59tg98a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ealqh_bzl wm-deco"/><path class="wm-deco yckat5-wu"/><path class="wm-deco z972s-b0h"/><path class="e4zyhxw3z wm-k"/><path class="g7bj_5l-m wm-a"/><path class="wm-s wv59tg98a"/></g>`,
		"fallback": "withicons:bomb-blueprint",
	});
}

export default Component;
