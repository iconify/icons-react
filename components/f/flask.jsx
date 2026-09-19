import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvj36pv6d.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvj36pv6d"/>`,
		"fallback": "dinkie-icons:flask",
	});
}

export default Component;
