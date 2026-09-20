import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/r/r2i4hcc4h.css';
import '../../css/r/r-luteblc.css';
import '../../css/c/czfe36bit.css';
import '../../css/r/rb_ywng4r.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><path class="r2i4hcc4h"/><path class="r-luteblc"/><path class="czfe36bit"/><path class="rb_ywng4r"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:angle-left-circle-filled",
	});
}

export default Component;
