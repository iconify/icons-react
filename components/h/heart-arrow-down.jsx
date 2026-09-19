import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlm5yub9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlm5yub9t"/>`,
		"fallback": "iconoir:heart-arrow-down",
	});
}

export default Component;
