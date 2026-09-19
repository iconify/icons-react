import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsevgjq2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsevgjq2z"/>`,
		"fallback": "cbi:bulb-lightguide-round",
	});
}

export default Component;
