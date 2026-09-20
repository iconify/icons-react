import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii0_g0bjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii0_g0bjs"/>`,
		"fallback": "lucide:flask-conical",
	});
}

export default Component;
