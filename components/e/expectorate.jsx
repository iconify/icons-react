import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s8aq1abhv.css';
import '../../css/d/dq5fjybre.css';
import '../../css/f/f216bmpmc.css';
import '../../css/l/ldyzd45ig.css';
import '../../css/n/ndo9futaq.css';
import '../../css/x/xmscx4bzx.css';
import '../../css/b/bvjf7qbom.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s8aq1abhv"/><path class="dq5fjybre"/><path clip-rule="evenodd" class="f216bmpmc"/><path class="ldyzd45ig"/><path clip-rule="evenodd" class="ndo9futaq"/><path class="xmscx4bzx"/><path clip-rule="evenodd" class="bvjf7qbom"/></g>`,
		"fallback": "healthicons:expectorate",
	});
}

export default Component;
