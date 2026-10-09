import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2_8-nb1y.css';
import '../../css/f/fbgnz0ewn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2_8-nb1y"/><path class="fbgnz0ewn"/>`,
		"fallback": "energy-icons:briefcase-20",
	});
}

export default Component;
