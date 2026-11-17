import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km5wu5wyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km5wu5wyq"/>`,
		"fallback": "lucide:carets-from-axis-dashed-vertical",
	});
}

export default Component;
