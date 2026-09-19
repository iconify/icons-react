import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9qe-eb2q.css';
import '../../css/k/kf_l1cpme.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9qe-eb2q"/><path class="kf_l1cpme"/>`,
		"fallback": "ant-design:bulb-twotone",
	});
}

export default Component;
