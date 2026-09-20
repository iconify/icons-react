import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o4ffp8zxl.css';
import '../../css/c/c61s3zttl.css';
import '../../css/m/mw42pob4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o4ffp8zxl"/><path class="c61s3zttl"/><path class="mw42pob4d"/></g>`,
		"fallback": "solar:bag-cross-line-duotone",
	});
}

export default Component;
