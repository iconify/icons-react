import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4y_wl45o.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4y_wl45o"/>`,
		"fallback": "octicon:fold-up",
	});
}

export default Component;
