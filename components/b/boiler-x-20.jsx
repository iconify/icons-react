import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn29nlyjq.css';
import '../../css/u/uktn-1b8e.css';
import '../../css/l/lzmnrrp8b.css';
import '../../css/m/mxz5qbb3v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn29nlyjq"/><path class="uktn-1b8e"/><path class="lzmnrrp8b"/><path class="mxz5qbb3v"/>`,
		"fallback": "energy-icons:boiler-x-20",
	});
}

export default Component;
