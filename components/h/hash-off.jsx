import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pr0chacef.css';
import '../../css/f/fpqbkonzi.css';
import '../../css/d/dq-xs9irn.css';
import '../../css/s/sycodhw1t.css';
import '../../css/e/eopq1pvol.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="pr0chacef"><path class="fpqbkonzi"/><path class="dq-xs9irn"/></g><path clip-rule="evenodd" class="sycodhw1t"/><path clip-rule="evenodd" class="eopq1pvol"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:hash-off",
	});
}

export default Component;
