import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibunlsb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibunlsb4a"/>`,
		"fallback": "coolicons:chevron-down-to-line-round",
	});
}

export default Component;
