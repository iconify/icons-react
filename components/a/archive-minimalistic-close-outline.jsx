import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7e0u3hqa.css';
import '../../css/p/plovyotpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7e0u3hqa"/><path clip-rule="evenodd" class="plovyotpu"/>`,
		"fallback": "solar:archive-minimalistic-close-outline",
	});
}

export default Component;
