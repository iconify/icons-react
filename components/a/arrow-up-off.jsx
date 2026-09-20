import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pr0chacef.css';
import '../../css/c/cqyq4mlhs.css';
import '../../css/r/rhi7qpbko.css';
import '../../css/r/rj_u9lbil.css';
import '../../css/q/qrodqjb4o.css';
import '../../css/y/y_d3_dbln.css';
import '../../css/t/ttseslbft.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="pr0chacef"><path class="cqyq4mlhs"/><path class="rhi7qpbko"/><path class="rj_u9lbil"/></g><path clip-rule="evenodd" class="qrodqjb4o"/><path clip-rule="evenodd" class="y_d3_dbln"/><path clip-rule="evenodd" class="ttseslbft"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:arrow-up-off",
	});
}

export default Component;
