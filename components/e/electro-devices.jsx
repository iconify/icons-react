import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6m34_-qc.css';
import '../../css/i/ifltctg4q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6m34_-qc"/><path class="ifltctg4q"/>`,
		"fallback": "flat-color-icons:electro-devices",
	});
}

export default Component;
