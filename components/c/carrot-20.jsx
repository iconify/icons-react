import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkxaczbdn.css';
import '../../css/a/ad8m3acwq.css';
import '../../css/a/apgdcwqaq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkxaczbdn"/><path class="ad8m3acwq"/><path class="apgdcwqaq"/>`,
		"fallback": "energy-icons:carrot-20",
	});
}

export default Component;
