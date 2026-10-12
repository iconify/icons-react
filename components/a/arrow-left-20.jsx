import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxyer0bvw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxyer0bvw"/>`,
		"fallback": "garden:arrow-left-20",
	});
}

export default Component;
