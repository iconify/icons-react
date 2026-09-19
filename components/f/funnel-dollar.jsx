import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f--7-bb_s.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f--7-bb_s"/>`,
		"fallback": "fa-solid:funnel-dollar",
	});
}

export default Component;
