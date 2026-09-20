import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvn6i9e6r.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvn6i9e6r"/>`,
		"fallback": "octicon:fold-down",
	});
}

export default Component;
