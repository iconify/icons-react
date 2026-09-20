import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/p/p7bz0ccij.css';
import '../../css/c/cw89m0smd.css';
import '../../css/a/aohimmb-r.css';
import '../../css/p/p3ox6bcgg.css';
import '../../css/k/knrtyrjlr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="p7bz0ccij"/><path class="cw89m0smd"/><path class="aohimmb-r"/><path class="p3ox6bcgg"/><path class="knrtyrjlr"/></g>`,
		"fallback": "streamline-kameleon-color:grinder",
	});
}

export default Component;
