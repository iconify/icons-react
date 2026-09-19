import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0-1bibag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0-1bibag"/>`,
		"fallback": "cbi:ikea-fornuftig",
	});
}

export default Component;
