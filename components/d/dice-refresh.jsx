import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eke_vvbeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eke_vvbeq"/>`,
		"fallback": "noviair:dice-refresh",
	});
}

export default Component;
