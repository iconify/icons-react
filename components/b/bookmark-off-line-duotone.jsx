import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rsrhfac5n.css';
import '../../css/l/lht3z4o7e.css';
import '../../css/a/a14b-b97i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rsrhfac5n"/><path class="lht3z4o7e"/><path class="a14b-b97i"/></g>`,
		"fallback": "solar:bookmark-off-line-duotone",
	});
}

export default Component;
