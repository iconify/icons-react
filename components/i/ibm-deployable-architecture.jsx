import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkgx16bwu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkgx16bwu"/>`,
		"fallback": "carbon:ibm-deployable-architecture",
	});
}

export default Component;
