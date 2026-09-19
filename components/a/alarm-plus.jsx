import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1q-f9vcx.css';
import '../../css/u/uyp_7-bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1q-f9vcx"/><path class="uyp_7-bvg"/>`,
		"fallback": "boxicons:alarm-plus",
	});
}

export default Component;
