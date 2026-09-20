import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d91b1m4xa.css';
import '../../css/d/deymd5jrm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d91b1m4xa"/><path class="deymd5jrm"/>`,
		"fallback": "qlementine-icons:external-link-16",
	});
}

export default Component;
