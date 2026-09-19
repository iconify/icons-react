import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxj-53b3o.css';
import '../../css/v/vdkkambso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxj-53b3o"/><path class="vdkkambso"/>`,
		"fallback": "bx:bx-x-circle",
	});
}

export default Component;
