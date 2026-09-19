import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdvqu6b_a.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdvqu6b_a"/>`,
		"fallback": "dinkie-icons:eye",
	});
}

export default Component;
