import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjet1jbll.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjet1jbll"/>`,
		"fallback": "temaki:car-parked",
	});
}

export default Component;
