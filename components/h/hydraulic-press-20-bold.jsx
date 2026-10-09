import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy2pzrflv.css';
import '../../css/o/oyd37-buh.css';
import '../../css/y/yjj9at6oo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy2pzrflv"/><path class="oyd37-buh"/><path class="yjj9at6oo"/>`,
		"fallback": "energy-icons:hydraulic-press-20-bold",
	});
}

export default Component;
