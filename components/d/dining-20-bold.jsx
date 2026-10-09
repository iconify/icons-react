import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjr53p4wm.css';
import '../../css/j/jx_02mklt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjr53p4wm"/><path class="jx_02mklt"/>`,
		"fallback": "energy-icons:dining-20-bold",
	});
}

export default Component;
