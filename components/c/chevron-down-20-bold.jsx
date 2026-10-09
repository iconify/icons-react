import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/docpr_fdo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="docpr_fdo"/>`,
		"fallback": "energy-icons:chevron-down-20-bold",
	});
}

export default Component;
