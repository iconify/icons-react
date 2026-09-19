import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udxgnlb5e.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udxgnlb5e"/>`,
		"fallback": "devicon:apple",
	});
}

export default Component;
