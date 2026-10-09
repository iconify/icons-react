import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxzl1bc0g.css';
import '../../css/e/e6or4bcld.css';
import '../../css/a/a2_nmqdnh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxzl1bc0g"/><path class="e6or4bcld"/><path class="a2_nmqdnh"/>`,
		"fallback": "energy-icons:camper-van-20-bold",
	});
}

export default Component;
