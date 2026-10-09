import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofzjtmbpe.css';
import '../../css/r/rm_v3ccms.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofzjtmbpe"/><path class="rm_v3ccms"/>`,
		"fallback": "energy-icons:arrow-down-to-line-48",
	});
}

export default Component;
