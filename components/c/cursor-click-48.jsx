import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lstwdq_nx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lstwdq_nx"/>`,
		"fallback": "energy-icons:cursor-click-48",
	});
}

export default Component;
