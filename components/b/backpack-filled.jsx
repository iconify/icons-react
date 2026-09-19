import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h__5z1bbd.css';
import '../../css/s/s2rt5pbav.css';
import '../../css/z/zv3nb1bjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h__5z1bbd"/><path class="s2rt5pbav"/><path class="zv3nb1bjm"/>`,
		"fallback": "boxicons:backpack-filled",
	});
}

export default Component;
