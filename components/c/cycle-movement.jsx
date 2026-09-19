import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c6icjcb7c.css';
import '../../css/x/xvt9lzner.css';
import '../../css/v/vglkpybfg.css';
import '../../css/q/q6x5n8bwx.css';
import '../../css/r/rzl9oycze.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="c6icjcb7c"/><path class="xvt9lzner"/><path class="vglkpybfg"/><path class="q6x5n8bwx"/><path class="rzl9oycze"/></g>`,
		"fallback": "icon-park-outline:cycle-movement",
	});
}

export default Component;
