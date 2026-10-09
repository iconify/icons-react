import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0pjpe9ss.css';
import '../../css/o/ols5a6b1f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0pjpe9ss"/><path class="ols5a6b1f"/>`,
		"fallback": "energy-icons:arrows-horizontal-20",
	});
}

export default Component;
