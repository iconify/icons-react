import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/alaw1vzcj.css';
import '../../css/x/xqmg7ycna.css';
import '../../css/i/ifmva9g2b.css';
import '../../css/w/wwk6gdwuk.css';
import '../../css/l/l72am6s0n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="alaw1vzcj"/><path class="xqmg7ycna"/><path class="ifmva9g2b"/><path class="wwk6gdwuk"/><path class="l72am6s0n"/></g>`,
		"fallback": "icon-park-solid:database-network-point",
	});
}

export default Component;
