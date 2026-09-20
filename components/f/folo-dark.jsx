import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcpclgb6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcpclgb6d"/>`,
		"fallback": "selfhst:folo-dark",
	});
}

export default Component;
