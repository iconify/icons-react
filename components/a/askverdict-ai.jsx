import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/ph18ztb1l.css';
import '../../css/c/cy0lo1bgb.css';
import '../../css/s/s8555ub_w.css';
import '../../css/t/tgxxv4-ay.css';
import '../../css/c/cwnkpx8fh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ph18ztb1l"/><path class="cy0lo1bgb"/><path class="s8555ub_w"/><path class="tgxxv4-ay"/><path class="cwnkpx8fh"/></g>`,
		"fallback": "thesvg:askverdict-ai",
	});
}

export default Component;
