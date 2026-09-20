import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_q8l3bsv.css';
import '../../css/a/agp2gjbkb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_q8l3bsv"/><path class="agp2gjbkb"/>`,
		"fallback": "selfhst:apache-superset-light",
	});
}

export default Component;
