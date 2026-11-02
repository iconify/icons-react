import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsmsgz_jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsmsgz_jk"/>`,
		"fallback": "mingcute:ad-circle-off-fill",
	});
}

export default Component;
