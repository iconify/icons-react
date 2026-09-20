import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c8sdqccfu.css';
import '../../css/p/ppl1dfbol.css';
import '../../css/l/lxnrhrbcb.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c8sdqccfu"/><path clip-rule="evenodd" class="ppl1dfbol"/><path class="lxnrhrbcb"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:eye-off",
	});
}

export default Component;
