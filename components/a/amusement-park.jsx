import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz9x4_4-o.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz9x4_4-o"/>`,
		"fallback": "map:amusement-park",
	});
}

export default Component;
