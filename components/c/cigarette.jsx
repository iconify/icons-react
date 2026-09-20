import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipgay6bzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipgay6bzg"/>`,
		"fallback": "lucide:cigarette",
	});
}

export default Component;
