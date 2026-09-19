import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0ugaht_w.css';
import '../../css/d/dbovvfb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0ugaht_w"/><path class="dbovvfb-i"/>`,
		"fallback": "boxicons:air-conditioner",
	});
}

export default Component;
