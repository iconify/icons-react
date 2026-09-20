import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc_gv2b1c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc_gv2b1c"/>`,
		"fallback": "temaki:elevator",
	});
}

export default Component;
