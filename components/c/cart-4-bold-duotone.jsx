import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj084fw9a.css';
import '../../css/x/xzn_it8jp.css';
import '../../css/b/by0-yumdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj084fw9a"/><path class="xzn_it8jp"/><path class="by0-yumdt"/>`,
		"fallback": "solar:cart-4-bold-duotone",
	});
}

export default Component;
