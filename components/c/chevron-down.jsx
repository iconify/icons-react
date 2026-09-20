import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz2m8acdk.css';

const viewBox = {"width":10,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz2m8acdk"/>`,
		"fallback": "octicon:chevron-down",
	});
}

export default Component;
