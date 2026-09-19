import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e22ps333c.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e22ps333c"/>`,
		"fallback": "dinkie-icons:heart-black-suit-circled",
	});
}

export default Component;
