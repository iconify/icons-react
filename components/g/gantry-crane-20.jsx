import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn3kjzbic.css';
import '../../css/v/v9nux6bhi.css';
import '../../css/s/shy242ktc.css';
import '../../css/w/whslaccyj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn3kjzbic"/><path class="v9nux6bhi"/><path class="shy242ktc"/><path class="whslaccyj"/>`,
		"fallback": "energy-icons:gantry-crane-20",
	});
}

export default Component;
