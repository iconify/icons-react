import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sun_ywaan.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sun_ywaan"/>`,
		"fallback": "andrsrxn:error-400",
	});
}

export default Component;
