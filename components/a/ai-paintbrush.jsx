import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwq8uec-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwq8uec-c"/>`,
		"fallback": "hugeicons:ai-paintbrush",
	});
}

export default Component;
