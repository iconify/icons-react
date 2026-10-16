import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxj_-80zx.css';
import '../../css/p/pkq5p1b7q.css';
import '../../css/t/t3bhb6x7o.css';
import '../../css/b/byle89bxf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxj_-80zx"/><path class="pkq5p1b7q"/><path class="t3bhb6x7o"/><path class="byle89bxf"/>`,
		"fallback": "energy-icons:greenhouse-effect-20",
	});
}

export default Component;
