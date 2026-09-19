import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw8l5ib2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lw8l5ib2s"/>`,
		"fallback": "healthicons:drone-24px",
	});
}

export default Component;
