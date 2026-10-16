import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzvlv_b9a.css';
import '../../css/y/yrnfbubdf.css';
import '../../css/l/lsfkntbhg.css';
import '../../css/h/h42_f1zpn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzvlv_b9a"/><path class="yrnfbubdf"/><path class="lsfkntbhg"/><path class="h42_f1zpn"/>`,
		"fallback": "energy-icons:church-20-bold",
	});
}

export default Component;
