import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxrp8fbwb.css';
import '../../css/s/sp9j6lqmm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxrp8fbwb"/><path class="sp9j6lqmm"/>`,
		"fallback": "maki:globe-15",
	});
}

export default Component;
