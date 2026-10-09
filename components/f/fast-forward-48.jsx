import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7fb6nbqg.css';
import '../../css/x/xn59nof8q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7fb6nbqg"/><path class="xn59nof8q"/>`,
		"fallback": "energy-icons:fast-forward-48",
	});
}

export default Component;
