import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfpe-fj8i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfpe-fj8i"/>`,
		"fallback": "doodle-icons:bookmark",
	});
}

export default Component;
