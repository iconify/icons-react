import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz7uw_vip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz7uw_vip"/>`,
		"fallback": "majesticons:comment",
	});
}

export default Component;
