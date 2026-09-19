import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnsjc_z3l.css';

const viewBox = {"width":472,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnsjc_z3l"/>`,
		"fallback": "zmdi:collection-item-2",
	});
}

export default Component;
