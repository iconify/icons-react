import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk_rkd_or.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk_rkd_or"/>`,
		"fallback": "mynaui:anchor",
	});
}

export default Component;
