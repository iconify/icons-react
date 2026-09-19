import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmvk8nhzs.css';
import '../../css/t/tza-ysb2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmvk8nhzs"/><path class="tza-ysb2u"/>`,
		"fallback": "boxicons:handheld",
	});
}

export default Component;
