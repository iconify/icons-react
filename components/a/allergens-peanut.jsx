import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/v/vn1nw6bjf.css';
import '../../css/a/a44s4kdyz.css';
import '../../css/v/vt6jytxlv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="vn1nw6bjf"/><path class="a44s4kdyz"/><path class="vt6jytxlv"/></g>`,
		"fallback": "streamline-sharp-color:allergens-peanut",
	});
}

export default Component;
