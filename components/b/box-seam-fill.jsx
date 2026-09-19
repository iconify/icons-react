import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqq1ptbnl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqq1ptbnl"/>`,
		"fallback": "bi:box-seam-fill",
	});
}

export default Component;
