import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj81u2bjj.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj81u2bjj"/>`,
		"fallback": "dinkie-icons:battery",
	});
}

export default Component;
