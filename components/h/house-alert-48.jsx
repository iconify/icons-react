import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqmwze80o.css';
import '../../css/e/e3mo12bkj.css';
import '../../css/n/n8-5n64ef.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqmwze80o"/><path class="e3mo12bkj"/><path class="n8-5n64ef"/>`,
		"fallback": "energy-icons:house-alert-48",
	});
}

export default Component;
