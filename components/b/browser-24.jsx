import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsriy4b_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsriy4b_f"/>`,
		"fallback": "octicon:browser-24",
	});
}

export default Component;
