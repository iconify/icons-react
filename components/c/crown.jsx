import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj42u0b0r.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj42u0b0r"/>`,
		"fallback": "dinkie-icons:crown",
	});
}

export default Component;
