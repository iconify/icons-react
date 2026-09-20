import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfem4tb8j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfem4tb8j"/>`,
		"fallback": "maki:car-rental",
	});
}

export default Component;
