import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic049nbdu.css';
import '../../css/u/ulq1acb8t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic049nbdu"/><path class="ulq1acb8t"/>`,
		"fallback": "famicons:business",
	});
}

export default Component;
