import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgyx6_bat.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgyx6_bat"/>`,
		"fallback": "fa-solid:angle-double-up",
	});
}

export default Component;
