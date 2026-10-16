import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6_s1zkbf.css';
import '../../css/c/cyt56vxcd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6_s1zkbf"/><path class="cyt56vxcd"/>`,
		"fallback": "energy-icons:hazard-corrosive-20",
	});
}

export default Component;
