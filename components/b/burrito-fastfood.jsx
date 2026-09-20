import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/zuuurlsid.css';
import '../../css/s/soj9kcc_o.css';
import '../../css/a/alb1oebrg.css';
import '../../css/i/is2hclbsn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="zuuurlsid"/><path class="soj9kcc_o"/><path class="alb1oebrg"/><path class="is2hclbsn"/></g>`,
		"fallback": "streamline:burrito-fastfood",
	});
}

export default Component;
