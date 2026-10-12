import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn29nlyjq.css';
import '../../css/u/uktn-1b8e.css';
import '../../css/x/xm5em6khk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn29nlyjq"/><path class="uktn-1b8e"/><path class="xm5em6khk"/>`,
		"fallback": "energy-icons:boiler-check-20",
	});
}

export default Component;
