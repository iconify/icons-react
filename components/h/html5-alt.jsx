import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd6l-0h0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd6l-0h0p"/>`,
		"fallback": "uil:html5-alt",
	});
}

export default Component;
