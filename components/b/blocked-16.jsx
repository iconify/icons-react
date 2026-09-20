import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij-3dl-jv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij-3dl-jv"/>`,
		"fallback": "octicon:blocked-16",
	});
}

export default Component;
