import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu6v7ibol.css';
import '../../css/i/iq2ggzbaw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu6v7ibol"/><path class="iq2ggzbaw"/>`,
		"fallback": "roentgen:i-in-square-support-wall",
	});
}

export default Component;
