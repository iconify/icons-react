import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5nysbo_z.css';
import '../../css/n/nfn_d0zln.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5nysbo_z"/><path class="nfn_d0zln"/>`,
		"fallback": "cryptocurrency:cix",
	});
}

export default Component;
