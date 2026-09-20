import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/i/i_r1_acgo.css';
import '../../css/c/chz07ibxv.css';
import '../../css/o/oeulkf_kp.css';
import '../../css/o/ozv6h8gfo.css';
import '../../css/b/b2tngprxw.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><path clip-rule="evenodd" class="i_r1_acgo"/><path class="chz07ibxv"/><path clip-rule="evenodd" class="oeulkf_kp"/><path class="ozv6h8gfo"/><path class="b2tngprxw"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:bicycle-circle-filled",
	});
}

export default Component;
