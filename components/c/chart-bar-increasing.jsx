import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anv572byz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anv572byz"/>`,
		"fallback": "lucide:chart-bar-increasing",
	});
}

export default Component;
