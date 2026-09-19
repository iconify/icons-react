import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3_j8y16n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3_j8y16n"/>`,
		"fallback": "icon-park-outline:horizontal-tidy-up",
	});
}

export default Component;
