import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/culokgb4m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="culokgb4m"/>`,
		"fallback": "energy-icons:direct-current-20",
	});
}

export default Component;
