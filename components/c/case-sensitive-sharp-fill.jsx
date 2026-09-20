import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz8fuvhmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz8fuvhmn"/>`,
		"fallback": "keyline-icons:case-sensitive-sharp-fill",
	});
}

export default Component;
