import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf_l1cpme.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf_l1cpme"/>`,
		"fallback": "ant-design:bulb-outlined",
	});
}

export default Component;
