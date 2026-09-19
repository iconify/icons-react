import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_cpnh_xd.css';
import '../../css/h/hqrdqe__q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_cpnh_xd"/><rect class="hqrdqe__q"/>`,
		"fallback": "famicons:checkbox-outline",
	});
}

export default Component;
