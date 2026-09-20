import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/b2ps5cbvw.css';
import '../../css/s/sdsvtq1vd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="b2ps5cbvw"/><path class="sdsvtq1vd"/></g>`,
		"fallback": "keyline-icons:credit-card-2-sharp-two-tone",
	});
}

export default Component;
