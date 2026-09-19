import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6m34_-qc.css';
import '../../css/h/h-3i78bcq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6m34_-qc"/><path class="h-3i78bcq"/>`,
		"fallback": "flat-color-icons:automatic",
	});
}

export default Component;
