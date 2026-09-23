import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w56k6_btw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w56k6_btw"/>`,
		"fallback": "keyline-icons:corner-left-down-sharp-fill",
	});
}

export default Component;
