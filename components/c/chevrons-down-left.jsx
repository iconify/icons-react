import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef5jcs_rd.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef5jcs_rd"/>`,
		"fallback": "jam:chevrons-down-left",
	});
}

export default Component;
