import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h2k4rcbma.css';
import '../../css/n/npblxp04p.css';
import '../../css/n/n3n5idbee.css';
import '../../css/u/ugfymdbif.css';
import '../../css/a/axw_ngf8y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h2k4rcbma"/><path class="npblxp04p"/><path class="n3n5idbee"/><path class="ugfymdbif"/><path class="axw_ngf8y"/></g>`,
		"fallback": "pepicons:expand-print",
	});
}

export default Component;
