import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz15if_zj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz15if_zj"/>`,
		"fallback": "ri:apps-2-line",
	});
}

export default Component;
