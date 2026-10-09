import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gghdvqo-j.css';
import '../../css/r/rqsrs2a_h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gghdvqo-j"/><path class="rqsrs2a_h"/>`,
		"fallback": "energy-icons:audit-20-bold",
	});
}

export default Component;
