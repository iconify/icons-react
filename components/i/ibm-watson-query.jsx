import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nch3szbem.css';
import '../../css/d/d6mnshidp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nch3szbem"/><path class="d6mnshidp"/>`,
		"fallback": "carbon:ibm-watson-query",
	});
}

export default Component;
