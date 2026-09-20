import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/b2ps5cbvw.css';
import '../../css/i/ia3qmde4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="b2ps5cbvw"/><path class="ia3qmde4f"/></g>`,
		"fallback": "keyline-icons:credit-card-sharp-two-tone",
	});
}

export default Component;
