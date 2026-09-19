import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhpwv3ssp.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhpwv3ssp"/>`,
		"fallback": "dinkie-icons:confetti-ball",
	});
}

export default Component;
