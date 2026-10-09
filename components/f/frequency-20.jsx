import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_ogkov_s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_ogkov_s"/>`,
		"fallback": "energy-icons:frequency-20",
	});
}

export default Component;
