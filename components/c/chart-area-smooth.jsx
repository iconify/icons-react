import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkdtpob8k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkdtpob8k"/>`,
		"fallback": "carbon:chart-area-smooth",
	});
}

export default Component;
