import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sslb1u9_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sslb1u9_c"/>`,
		"fallback": "uil:fire",
	});
}

export default Component;
