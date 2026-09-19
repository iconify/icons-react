import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exo_ym68c.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exo_ym68c"/>`,
		"fallback": "dinkie-icons:glowing-star",
	});
}

export default Component;
