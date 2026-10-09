import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_7rhjb0r.css';
import '../../css/h/h7z2y_agc.css';
import '../../css/d/dzijucbcp.css';
import '../../css/a/asxj_mbva.css';
import '../../css/t/t4futcxuj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_7rhjb0r"/><path class="h7z2y_agc"/><path class="dzijucbcp"/><path class="asxj_mbva"/><path class="t4futcxuj"/>`,
		"fallback": "energy-icons:battery-swap-20-bold",
	});
}

export default Component;
