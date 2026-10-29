import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/azfzslb7l.css';
import '../../css/h/hs7tagb7l.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/z/z2fq9cbxy.css';
import '../../css/y/ykqnlnbbe.css';
import '../../css/a/al5lf5e3v.css';
import '../../css/e/eix6_h28i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="azfzslb7l wm-deco"/><path class="hs7tagb7l wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="wm-k z2fq9cbxy"/><path class="wm-a ykqnlnbbe"/><path class="al5lf5e3v wm-s"/><path class="eix6_h28i wm-k"/></g>`,
		"fallback": "withicons:calendar-search-blueprint",
	});
}

export default Component;
