import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjm5n7boi.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjm5n7boi"/>`,
		"fallback": "garden:full-width-fill-12",
	});
}

export default Component;
