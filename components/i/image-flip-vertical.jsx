import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lds95vbey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lds95vbey"/>`,
		"fallback": "hugeicons:image-flip-vertical",
	});
}

export default Component;
