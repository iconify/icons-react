import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yiemwqbmv.css';
import '../../css/k/k6k1t_68c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yiemwqbmv"/><path class="k6k1t_68c"/>`,
		"fallback": "boxicons:heart-plus",
	});
}

export default Component;
