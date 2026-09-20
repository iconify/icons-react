import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkitgic2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkitgic2s"/>`,
		"fallback": "ri:corner-left-down-line",
	});
}

export default Component;
