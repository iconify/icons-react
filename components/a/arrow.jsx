import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi5ik7blv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi5ik7blv"/>`,
		"fallback": "maki:arrow",
	});
}

export default Component;
