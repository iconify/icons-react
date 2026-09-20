import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtv_b7_ax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtv_b7_ax"/>`,
		"fallback": "tabler:brand-stripe",
	});
}

export default Component;
