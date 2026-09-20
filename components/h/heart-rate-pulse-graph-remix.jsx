import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aogr9_c5h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aogr9_c5h"/>`,
		"fallback": "streamline-plump:heart-rate-pulse-graph-remix",
	});
}

export default Component;
