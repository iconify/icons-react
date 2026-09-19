import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncl5o2vtf.css';
import '../../css/v/vy6_7tdem.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 ncl5o2vtf"/><path class="clr-i-outline clr-i-outline-path-2 vy6_7tdem"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:house-line",
	});
}

export default Component;
