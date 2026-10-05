import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/ryfxsnb7k.css';
import '../../css/t/t3g9whbyu.css';
import '../../css/f/fdp_8i46o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ryfxsnb7k"/><path class="t3g9whbyu"/><path class="fdp_8i46o"/></g>`,
		"fallback": "matita:bell",
	});
}

export default Component;
