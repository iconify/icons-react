import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ub7caprkl.css';
import '../../css/z/z9foj0s3t.css';
import '../../css/x/x89uejb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ub7caprkl"/><path class="z9foj0s3t"/><path class="x89uejb-e"/></g>`,
		"fallback": "keyline-icons:coupon-duotone",
	});
}

export default Component;
