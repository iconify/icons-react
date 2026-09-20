import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgvc3bknt.css';
import '../../css/n/nmc_ieezo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgvc3bknt"/><path class="nmc_ieezo"/>`,
		"fallback": "octicon:graph-bar-vertical-16",
	});
}

export default Component;
