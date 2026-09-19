import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqol4wbub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wqol4wbub"/>`,
		"fallback": "griddy-icons:flash-double-filled",
	});
}

export default Component;
