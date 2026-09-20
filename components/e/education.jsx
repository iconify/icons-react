import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0zucx8cu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0zucx8cu"/>`,
		"fallback": "zondicons:education",
	});
}

export default Component;
