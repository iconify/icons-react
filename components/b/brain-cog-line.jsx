import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n69d1sqzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n69d1sqzd"/>`,
		"fallback": "mingcute:brain-cog-line",
	});
}

export default Component;
