import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwmmrrb4p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwmmrrb4p"/>`,
		"fallback": "selfhst:frappe-gameplan-light",
	});
}

export default Component;
