import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r24r7qt7r.css';
import '../../css/x/xuu2b7bwb.css';
import '../../css/c/ct_c29f3k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r24r7qt7r"/><path class="xuu2b7bwb"/><path class="ct_c29f3k"/>`,
		"fallback": "energy-icons:drone-inspection-20",
	});
}

export default Component;
