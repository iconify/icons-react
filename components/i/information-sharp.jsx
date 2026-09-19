import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjonbacvn.css';
import '../../css/c/cfprd2egi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjonbacvn"/><path class="cfprd2egi"/>`,
		"fallback": "famicons:information-sharp",
	});
}

export default Component;
