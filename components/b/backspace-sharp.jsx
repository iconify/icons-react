import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp6e1w2wt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp6e1w2wt"/>`,
		"fallback": "ion:backspace-sharp",
	});
}

export default Component;
