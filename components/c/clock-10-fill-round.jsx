import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w41lk14vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w41lk14vc"/>`,
		"fallback": "coolicons:clock-10-fill-round",
	});
}

export default Component;
