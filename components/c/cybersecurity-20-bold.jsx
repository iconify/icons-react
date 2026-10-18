import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5f9s_k4f.css';
import '../../css/o/oc7x2x87v.css';
import '../../css/k/kcpt-5ssg.css';
import '../../css/h/hoiq_la6d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5f9s_k4f"/><path class="oc7x2x87v"/><path class="kcpt-5ssg"/><path class="hoiq_la6d"/>`,
		"fallback": "energy-icons:cybersecurity-20-bold",
	});
}

export default Component;
