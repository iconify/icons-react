import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or5y5jvbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or5y5jvbv"/>`,
		"fallback": "lucide:cloud-drizzle",
	});
}

export default Component;
