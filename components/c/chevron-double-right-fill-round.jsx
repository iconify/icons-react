import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf2eypbqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf2eypbqc"/>`,
		"fallback": "coolicons:chevron-double-right-fill-round",
	});
}

export default Component;
