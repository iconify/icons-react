import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdl5g5dgd.css';
import '../../css/e/e2ii3_num.css';
import '../../css/h/hq8tc3ygq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdl5g5dgd"/><path class="e2ii3_num"/><path class="hq8tc3ygq"/>`,
		"fallback": "energy-icons:buoy-20",
	});
}

export default Component;
