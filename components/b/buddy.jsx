import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx6ck3egz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx6ck3egz"/>`,
		"fallback": "dinkie-icons:buddy",
	});
}

export default Component;
