import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcneon1wc.css';
import '../../css/f/fdawbm_9g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcneon1wc"/><path class="fdawbm_9g"/>`,
		"fallback": "teenyicons:bath-solid",
	});
}

export default Component;
