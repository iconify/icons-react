import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et-0ovb7d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et-0ovb7d"/>`,
		"fallback": "maki:bbq-15",
	});
}

export default Component;
