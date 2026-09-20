import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6g2lnbqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6g2lnbqs"/>`,
		"fallback": "mdi:account-file",
	});
}

export default Component;
