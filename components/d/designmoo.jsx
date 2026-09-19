import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shye-ib9d.css';

const viewBox = {"width":464,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shye-ib9d"/>`,
		"fallback": "ps:designmoo",
	});
}

export default Component;
