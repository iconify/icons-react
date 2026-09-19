import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zvtcr7bav.css';
import '../../css/c/c6rglys6g.css';
import '../../css/n/nyh693qis.css';
import '../../css/k/k1j-xbcdy.css';
import '../../css/q/qsjiu_bqx.css';
import '../../css/c/ck-1rvlsv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zvtcr7bav"/><path class="c6rglys6g"/><path clip-rule="evenodd" class="nyh693qis"/><path class="k1j-xbcdy"/><path class="qsjiu_bqx"/><path class="ck-1rvlsv"/></g>`,
		"fallback": "pepicons:coctail-print",
	});
}

export default Component;
