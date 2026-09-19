import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bntco1b6w.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bntco1b6w"/>`,
		"fallback": "dinkie-icons:heart-white-suit-circled",
	});
}

export default Component;
