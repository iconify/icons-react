import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez22xh-gg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez22xh-gg"/>`,
		"fallback": "energy-icons:child-20",
	});
}

export default Component;
