import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb7h-ubmy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb7h-ubmy"/>`,
		"fallback": "energy-icons:chart-funnel-48",
	});
}

export default Component;
