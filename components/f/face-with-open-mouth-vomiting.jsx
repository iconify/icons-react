import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk88cabmm.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk88cabmm"/>`,
		"fallback": "dinkie-icons:face-with-open-mouth-vomiting",
	});
}

export default Component;
