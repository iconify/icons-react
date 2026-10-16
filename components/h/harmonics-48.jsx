import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai2qpg8ax.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai2qpg8ax"/>`,
		"fallback": "energy-icons:harmonics-48",
	});
}

export default Component;
