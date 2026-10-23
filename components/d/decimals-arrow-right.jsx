import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xixnvzb-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xixnvzb-l"/>`,
		"fallback": "vadivam:decimals-arrow-right",
	});
}

export default Component;
