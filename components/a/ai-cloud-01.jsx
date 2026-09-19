import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cguul6b4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cguul6b4k"/>`,
		"fallback": "hugeicons:ai-cloud-01",
	});
}

export default Component;
